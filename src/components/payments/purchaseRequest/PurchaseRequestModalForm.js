import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CFormCheck,
  CFormTextarea,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormSelect,
  CProgress,
} from '@coreui/react'
import { cilPlus, cilTrash, cilDollar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { fileTags } from 'src/utils/fileTags'
import { FileCard, AppToast } from '../../app'
import Swal from 'sweetalert2'
import { formatNumber, movementTypes, useHasPermission } from 'src/utils/functions'
import { selectAccountsByProvider, selectProviders } from 'src/actions/provider'
import {
  addPurchaseRequest,
  approvePurchaseRequest,
  getPendingPaymentsByProvider,
  rejectPurchaseRequest,
  payPurchaseRequest,
  updatePurchaseRequest,
  getPurchaseRequests,
} from 'src/actions/purchaseRequest'
import { setToast } from 'src/actions/toast'
import ModalFormPendingPaymentsTable from './ModalFormPendingPaymentsTable'
import { uploadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'

const PurchaseRequestModalForm = ({ visible, onClose, purchaseData, view }) => {
  const [activeKey, setActiveKey] = useState(1),
    [purchaseRequestID, setPurchaseRequestID] = useState(''),
    [detailPendingID, setDetailPendingID] = useState(null),
    [title, setTitle] = useState(''),
    [totalAmount, setTotalAmount] = useState(0),
    [paymentAmount, setPaymentAmount] = useState(0),
    [imgFiles, setImgFiles] = useState([]),
    [invoiceFile, setInvoiceFile] = useState(null),
    [receiptFile, setReceiptFile] = useState(null),
    [totalPaymentApproved, setTotalPaymentApproved] = useState(false),
    [totalPaymentModified, setTotalPaymentModified] = useState(false),
    [paymentWithoutInvoice, setPaymentWithoutInvoice] = useState(false),
    [paymentDate, setPaymentDate] = useState(''),
    [quoteID, setQuoteID] = useState(''),
    [providerID, setProviderID] = useState(''),
    [providerAccountID, setProviderAccountID] = useState(''),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    hasPayPermission = useHasPermission('purchaseRequest', 'pay'),
    hasRejectPermission = useHasPermission('purchaseRequest', 'reject'),
    hasAuthorizePermission = useHasPermission('purchaseRequest', 'authorize'),
    user = useSelector((state) => state.auth.user)?.data?.user,
    inputImgFile = useRef(),
    inputReceiptFile = useRef(),
    providers = useSelector((state) => state.provider.providers),
    accounts = useSelector((state) => state.provider.accounts),
    { purchaseRequests, filters } = useSelector((state) => state.purchaseRequest)

  useEffect(() => {
    dispatch(selectProviders())
  }, [dispatch])

  useEffect(() => {
    if (!providerID) {
      return
    }
    dispatch(selectAccountsByProvider(providerID))
  }, [dispatch, providerID])

  useEffect(() => {
    if (!quoteID || quoteID === '') {
      return
    }
    dispatch(getPendingPaymentsByProvider(quoteID))
  }, [dispatch, quoteID, purchaseData])

  useEffect(() => {
    if (!purchaseData) {
      return
    }
    setPurchaseRequestID(purchaseData.id)
    setQuoteID(purchaseData.quote.id)
    setImgFiles(purchaseData.files?.filter((file) => file.tag === fileTags.img))
    setInvoiceFile(purchaseData.files?.find((file) => file.tag === fileTags.invoice))
    setReceiptFile(purchaseData.files?.find((file) => file.tag === fileTags.receipt))
    setTitle(purchaseData.title)
    setTotalAmount(purchaseData.totalAmount)
    setPaymentAmount(purchaseData.paymentAmount)
    setTotalPaymentApproved(!!purchaseData.totalPaymentApproved)
    setTotalPaymentModified(!!purchaseData.totalPaymentModified)
    setProviderID(purchaseData.provider_id)
    setProviderAccountID(purchaseData.provider_account_id)
    setPaymentWithoutInvoice(purchaseData.paymentWithoutInvoice)
    setPaymentDate(purchaseData.paymentDate)
  }, [purchaseData])

  const onReject = () => {
    Swal.fire({
      title: 'Escribe un motivo del rechazo',
      input: 'textarea',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      confirmButtonColor: '#E94834',
      showLoaderOnConfirm: true,
      preConfirm: async (observation) => {
        try {
          if (!observation) {
            Swal.showValidationMessage(`
            Escribe una observacion
          `)
            return
          }
          dispatch(
            rejectPurchaseRequest(
              { observation, user_id: user.id },
              purchaseData.id,
              (purchaseRequestRes) => {
                if (purchaseRequestRes.success) {
                  dispatch(setToast(AppToast({ msg: 'Solicitud rechazada', type: 'success' })))
                }
              },
            ),
          )
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `)
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Solicitud rechazada correctamente`,
        })
      }
    })
  }

  const onPay = () => {
    try {
      if (!paymentDate) {
        alert(`Selecciona fecha de pago`)
        return
      }
      if (!receiptFile) {
        alert(`Adjunta comprobante de pago`)
        return
      }
      dispatch(
        payPurchaseRequest(
          { paymentDate, user_id: user.id },
          purchaseData.id,
          (purchaseRequestRes) => {
            if (purchaseRequestRes.success) {
              onUploadReceiptFile(purchaseRequestRes.data)
              dispatch(setToast(AppToast({ msg: purchaseRequestRes.message, type: 'success' })))
              Swal.fire({
                title: `Solicitud pagada`,
              })
            }
          },
        ),
      )
    } catch (error) {
      Swal.showValidationMessage(`Request failed: ${error}`)
    }
  }

  const onAddImages = (e) => {
    if (!e.target.files[0]) {
      return
    }
    let data = {
      localName: e.target.files[0].name,
      tag: fileTags.img,
      file: e.target.files[0],
    }
    setImgFiles([...imgFiles, data])
    inputImgFile.current.value = ''
  }

  const clearGeneralInputs = useCallback(() => {
    setPurchaseRequestID('')
    setQuoteID('')
    setTitle('')
    setTotalAmount('')
    setPaymentAmount('')
    setImgFiles([])
  }, [])

  const onSave = (e) => {
    e.preventDefault()
    try {
      let data = {
        quote_id: quoteID,
        petitioner_id: user.id,
        title,
        paymentAmount,
        totalAmount,
        provider_id: providerID,
        provider_account_id: providerAccountID,
        paymentWithoutInvoice,
        totalPaymentApproved,
        totalPaymentModified,
      }
      dispatch(
        purchaseData
          ? updatePurchaseRequest(data, purchaseRequestID, (purchaseRequestRes) => {
              if (purchaseRequestRes.success) {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Solicitud actualizada correctamente.',
                      title: 'Solicitudes de compra',
                      type: 'success',
                    }),
                  ),
                )
                onUploadImgFiles(purchaseRequestRes.data)
              } else {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Ha ocurrido un error.',
                      title: 'Solicitudes de compra',
                      type: 'error',
                    }),
                  ),
                )
              }
            })
          : addPurchaseRequest(data, (purchaseRequestRes) => {
              if (purchaseRequestRes.success) {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Solicitud realizada correctamente.',
                      title: 'Solicitudes de compra',
                      type: 'success',
                    }),
                  ),
                )
                onUploadImgFiles(purchaseRequestRes.data)
              } else {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Ha ocurrido un error.',
                      title: 'Solicitudes de compra',
                      type: 'error',
                    }),
                  ),
                )
              }
            }),
      )
    } catch (error) {
      console.log(error)
    }
  }

  const onUploadImgFiles = (purchaseRequestRes) => {
    if (imgFiles.length > 0) {
      Promise.all(
        imgFiles.map((file) => {
          if (!file.id) {
            return dispatch(
              uploadFile(
                file.file,
                file.tag,
                null,
                purchaseRequestRes.id,
                modelTypes.purchaseRequest,
                () => {},
              ),
            )
          } else {
            onClose()
            clearGeneralInputs()
          }
        }),
      ).finally(() => {
        dispatch(getPurchaseRequests(purchaseRequests.current_page, filters.filter, filters.value))
      })
    } else {
      onClose()
      clearGeneralInputs()
    }
  }

  const onUploadReceiptFile = (purchaseRequestRes) => {
    try {
      dispatch(
        uploadFile(
          receiptFile.file,
          receiptFile.tag,
          null,
          purchaseRequestRes.id,
          modelTypes.purchaseRequest,
          () => {
            dispatch(
              getPurchaseRequests(purchaseRequests.current_page, filters.filter, filters.value),
            )
          },
        ),
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onClose()
        clearGeneralInputs()
      }, 3000)
    }
  }, [progress, onClose, clearGeneralInputs])

  useEffect(() => {
    if (totalPaymentApproved) {
      setTotalPaymentModified(false)
      setPaymentAmount(totalAmount)
    }
  }, [totalPaymentApproved, totalAmount])

  useEffect(() => {
    if (totalPaymentModified) {
      setTotalPaymentApproved(false)
    }
  }, [totalPaymentModified])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="xl">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">
          {purchaseData
            ? `${view ? '' : 'Editar'} Solicitud ${purchaseData.title}`
            : 'Nueva Solicitud'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {imgFiles.length > 0 && imgFiles.some((file) => !file.id) && (
          <CProgress value={progress} className="mb-2">
            {progress}%
          </CProgress>
        )}
        {receiptFile && !receiptFile.id && (
          <CProgress value={progress} className="mb-2">
            {progress}%
          </CProgress>
        )}
        <CNav variant="tabs" role="tablist" className="mt-1">
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 1}
              component="button"
              role="tab"
              aria-controls="data-tab-pane"
              aria-selected={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              General
            </CNavLink>
          </CNavItem>
          {!hasAuthorizePermission && !view && !purchaseData?.fromQuote && (
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 2}
                component="button"
                role="tab"
                aria-controls="account-tab-pane"
                aria-selected={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Pagos pendientes
              </CNavLink>
            </CNavItem>
          )}
          {((view && purchaseData.status === 'approved' && hasPayPermission) ||
            (view && purchaseData.status === 'paid')) && (
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 3}
                component="button"
                role="tab"
                aria-controls="account-tab-pane"
                aria-selected={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                Tramite de pago
              </CNavLink>
            </CNavItem>
          )}
        </CNav>
        <CTabContent>
          {/* purchase request data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              {view && purchaseData.fromQuote && (
                <>
                  <div className="mb-3 d-flex">
                    <div className="flex-md-fill me-2">
                      <CFormLabel>Proveedor</CFormLabel>
                      <CFormSelect
                        aria-label="provider"
                        onChange={(e) => setProviderID(e.target.value)}
                        value={providerID}
                        disabled={view || purchaseData?.fromQuote}
                      >
                        <option value={''}>Selecciona...</option>
                        {providers.data.map(({ id, name }) => (
                          <option key={id} value={id}>
                            {name}
                          </option>
                        ))}
                      </CFormSelect>
                    </div>
                    <div className="flex-md-fill me-2">
                      <CFormLabel>Cuenta</CFormLabel>
                      <CFormSelect
                        aria-label="providerAccount"
                        onChange={(e) => setProviderAccountID(e.target.value)}
                        value={providerAccountID}
                        disabled={view}
                      >
                        <option value={''}>Selecciona...</option>
                        {accounts?.data?.map(({ id, clabe, bank }) => (
                          <option key={id} value={id}>
                            {bank.name} - {clabe}
                          </option>
                        ))}
                      </CFormSelect>
                    </div>
                  </div>
                  {invoiceFile && (
                    <div className="mb-3 d-flex">
                      <FileCard
                        file={invoiceFile}
                        onDelete={(id) => {
                          setInvoiceFile(null)
                        }}
                        viewMode={view}
                      />
                    </div>
                  )}
                  <div className="mb-3">
                    <CFormCheck
                      id="paymentWithoutInvoice"
                      label="Tramitar pago sin factura"
                      checked={paymentWithoutInvoice}
                      onChange={(e) => setPaymentWithoutInvoice(e.target.checked)}
                      disabled={view || purchaseData?.fromQuote}
                    />
                  </div>
                </>
              )}
              <div className="mb-3">
                <CFormLabel>Título</CFormLabel>
                <CFormInput
                  type="text"
                  id="title"
                  placeholder="Título de la solicitud"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={view}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Monto</CFormLabel>
                <CFormInput
                  type="number"
                  id="totalAmount"
                  placeholder="0"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  disabled={view || purchaseData?.fromQuote}
                />
              </div>
              {!view && (
                <div className="mb-3">
                  <CFormLabel>
                    Sube <b>imágenes</b> para la solicitud (opcional)
                  </CFormLabel>
                  <CFormInput
                    ref={inputImgFile}
                    type="file"
                    id="imgFile"
                    onChange={onAddImages}
                    accept="image/*"
                    text="Archivos permitidos jpg, png, jpeg (10 MB)"
                  />
                </div>
              )}
              <div className="mb-3 d-flex">
                {imgFiles.map((file, index) => {
                  return (
                    <FileCard
                      file={file}
                      key={file.tag}
                      onDelete={(id) => {
                        return file.id
                          ? setImgFiles(imgFiles.filter((f) => f.id !== id))
                          : setImgFiles(imgFiles.filter((f, i) => index !== i))
                      }}
                      viewMode={view}
                    />
                  )
                })}
              </div>
              {((view && hasAuthorizePermission) ||
                purchaseData?.status === 'approved' ||
                purchaseData?.status === 'paid') && (
                <>
                  <div className="mb-3">
                    <CFormCheck
                      id="totalPaymentApproved"
                      label="Se aprueba monto de pago"
                      checked={totalPaymentApproved}
                      onChange={(e) => setTotalPaymentApproved(e.target.checked)}
                      disabled={
                        (view && purchaseData.status === 'approved') ||
                        purchaseData.status === 'paid'
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <CFormCheck
                      id="totalPaymentModified"
                      label="Se modifica monto de pago"
                      checked={totalPaymentModified}
                      onChange={(e) => setTotalPaymentModified(e.target.checked)}
                      disabled={
                        (view && purchaseData.status === 'approved') ||
                        purchaseData.status === 'paid'
                      }
                    />
                  </div>
                  {totalPaymentModified && (
                    <div className="mb-3">
                      <CFormLabel>Monto</CFormLabel>
                      <CFormInput
                        type="number"
                        id="amount"
                        placeholder="0"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        disabled={
                          (view && purchaseData.status === 'approved') ||
                          purchaseData.status === 'paid'
                        }
                      />
                    </div>
                  )}
                </>
              )}
            </CForm>
          </CTabPane>

          {/* pending payments */}
          <CTabPane
            role="tabpanel"
            aria-labelledby="data-tab-pane"
            visible={activeKey === 2}
          ></CTabPane>

          {/* files purchase request */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel>Dia de pago</CFormLabel>
                <CFormInput
                  type="date"
                  id="paymentDate"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  disabled={view && purchaseData.status === 'paid'}
                />
              </div>
              {view && purchaseData.status !== 'paid' && (
                <div className="mb-3">
                  <CFormLabel>Adjuntar comprobante de pago</CFormLabel>
                  <CFormInput
                    type="file"
                    ref={inputReceiptFile}
                    id="receiptFile"
                    onChange={(e) =>
                      setReceiptFile({
                        file: e.target.files[0],
                        tag: fileTags.receipt,
                        localName: e.target.files[0].name,
                      })
                    }
                    text="Archivos permitidos jpg, pdf, png, xlxs (10 MB)"
                  />
                </div>
              )}
              <div className="mb-3 d-flex">
                {receiptFile && (
                  <FileCard
                    file={receiptFile}
                    onDelete={(id) => {
                      setReceiptFile(null)
                      inputReceiptFile.current.value = ''
                    }}
                    viewMode={view && purchaseData.status === 'paid'}
                  />
                )}
              </div>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
        {purchaseData?.status !== 'approved' &&
          !hasPayPermission &&
          purchaseData?.status !== 'paid' && (
            <CButton color="primary" className="text-light fw-semibold" onClick={onSave}>
              Guardar
            </CButton>
          )}
        {view && (
          <>
            {purchaseData.status === 'approved' && hasPayPermission && (
              <CButton color="info" className="text-light fw-semibold" onClick={onPay}>
                Pagar
              </CButton>
            )}
            {purchaseData.status !== 'paid' &&
              hasRejectPermission &&
              purchaseData.status !== 'approved' && (
                <CButton color="danger" className="text-light fw-semibold" onClick={onReject}>
                  Rechazar
                </CButton>
              )}
          </>
        )}
      </CModalFooter>
    </CModal>
  )
}

export default PurchaseRequestModalForm
