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
import { selectProviders } from 'src/actions/provider'
import {
  addPurchaseRequest,
  approvePurchaseRequest,
  getPendingPaymentsByProvider,
  rejectPurchaseRequest,
  payPurchaseRequest,
  updatePurchaseRequest,
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
    [totalPaymentApproved, setTotalPaymentApproved] = useState(false),
    [totalPaymentModified, setTotalPaymentModified] = useState(false),
    [paymentDate, setPaymentDate] = useState(''),
    [quoteID, setQuoteID] = useState(''),
    [showPendingPayments, setShowPendingPayments] = useState(false),
    [files, setFiles] = useState([]),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { pendingPayments } = useSelector((state) => state.purchaseRequest),
    inputFile = useRef(),
    hasPayPermission = useHasPermission('purchaseRequest', 'pay'),
    hasRejectPermission = useHasPermission('purchaseRequest', 'reject'),
    hasAuthorizePermission = useHasPermission('purchaseRequest', 'authorize'),
    user = useSelector((state) => state.auth.user)?.data?.user,
    inputImgFile = useRef()

  useEffect(() => {
    if (!quoteID || quoteID === '') {
      return
    }
    dispatch(getPendingPaymentsByProvider(quoteID))
    setShowPendingPayments(false)
  }, [dispatch, quoteID, purchaseData])

  useEffect(() => {
    if (!purchaseData) {
      return
    }
    setPurchaseRequestID(purchaseData.id)
    setQuoteID(purchaseData.quote.id)
    setFiles(purchaseData.files)
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

  const onApprove = (e) => {
    e.preventDefault()
    try {
      dispatch(
        approvePurchaseRequest({ user_id: user.id }, purchaseRequestID, (purchaseRequestRes) => {
          if (purchaseRequestRes.success) {
            dispatch(setToast(AppToast({ msg: 'Cotización autorizada', type: 'success' })))
          } else {
            dispatch(
              setToast(
                AppToast({
                  msg: 'Ha ocurrido un error.',
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
    onClose()
  }

  const onPay = () => {
    Swal.fire({
      title: 'Selecciona la fecha del pago',
      input: 'date',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      confirmButtonColor: '#E94834',
      showLoaderOnConfirm: true,
      preConfirm: async (paymentDate) => {
        try {
          if (!paymentDate) {
            Swal.showValidationMessage(`
            selecciona fecha de pago
          `)
            return
          }
          dispatch(
            payPurchaseRequest(
              { paymentDate, user_id: user.id },
              purchaseData.id,
              (purchaseRequestRes) => {
                if (purchaseRequestRes.success) {
                  dispatch(setToast(AppToast({ msg: purchaseRequestRes.message, type: 'success' })))
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
          title: `Solicitud pagada, sube el comprobante de pago en la sección de archivos.`,
        })
      }
    })
  }

  const onAddFiles = (e) => {
    if (!e.target.files[0]) {
      return
    }
    let data = {
      localName: e.target.files[0].name,
      tag: fileTags.receipt,
      file: e.target.files[0],
    }
    setFiles([...files, data])
    inputFile.current.value = ''
  }

  const clearGeneralInputs = useCallback(() => {
    setPurchaseRequestID('')
    setQuoteID('')
    setFiles([])
  }, [])

  const onSave = (e) => {
    e.preventDefault()
    try {
      let data = {
        quote_id: quoteID,
        petitioner_id: user.id,
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
                onUploadFile(purchaseRequestRes.data)
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
                onUploadFile(purchaseRequestRes.data)
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

  const onUploadFile = (purchaseRequestRes) => {
    if (files) {
      Promise.all(
        files.map((file) => {
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
          }
        }),
      )
    } else {
      onClose()
      clearGeneralInputs()
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
          {purchaseData ? `Editar solicitud` : 'Nueva solicitud'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {files.length > 0 && files.some((file) => !file.id) && (
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

          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 2}
              component="button"
              role="tab"
              aria-controls="account-tab-pane"
              aria-selected={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Tramite de pago
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* purchase request data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
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
                  disabled={view}
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
                    onChange={onAddFiles}
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
              <div className="mb-3">
                <CFormCheck
                  id="totalPaymentApproved"
                  label="Se aprueba monto de pago"
                  checked={totalPaymentApproved}
                  onChange={(e) => setTotalPaymentApproved(e.target.checked)}
                  disabled={view}
                />
              </div>
              <div className="mb-3">
                <CFormCheck
                  id="totalPaymentModified"
                  label="Se modifica monto de pago"
                  checked={totalPaymentModified}
                  onChange={(e) => setTotalPaymentModified(e.target.checked)}
                  disabled={view}
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
                    disabled={view}
                  />
                </div>
              )}
            </CForm>
          </CTabPane>

          {/* files purchase request */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel>Dia de pago</CFormLabel>
                <CFormInput
                  type="date"
                  id="paymentDate"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Adjuntar comprobante de pago</CFormLabel>
                <CFormInput
                  ref={inputFile}
                  type="file"
                  id="csfFile"
                  onChange={onAddFiles}
                  text="Archivos permitidos jpg, pdf, png, xlxs (10 MB)"
                />
              </div>
              <div className="mb-3 d-flex">
                {files.map((file, index) => {
                  return (
                    <FileCard
                      file={file}
                      key={file.tag}
                      onDelete={(id) => {
                        return file.id
                          ? setFiles(files.filter((f) => f.id !== id))
                          : setFiles(files.filter((f, i) => index !== i))
                      }}
                    />
                  )
                })}
              </div>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
        <CButton color="primary" className="text-light fw-semibold" onClick={onSave}>
          Guardar
        </CButton>
        {view && (
          <>
            {purchaseData.status !== 'paid' &&
              purchaseData.status !== 'approved' &&
              hasAuthorizePermission && (
                <CButton color="success" className="text-light fw-semibold" onClick={onApprove}>
                  Autorizar
                </CButton>
              )}
            {purchaseData.status === 'approved' && hasPayPermission && (
              <CButton color="info" className="text-light fw-semibold" onClick={onPay}>
                Pagar
              </CButton>
            )}
            {purchaseData.status !== 'paid' && hasRejectPermission && (
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
