import React, { useState, useEffect, useCallback } from 'react'
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
  updatePurchaseRequest,
} from 'src/actions/purchaseRequest'
import { setToast } from 'src/actions/toast'
import ModalFormPendingPaymentsTable from './ModalFormPendingPaymentsTable'

const PurchaseRequestModalForm = ({ visible, onClose, purchaseData, view }) => {
  const [activeKey, setActiveKey] = useState(1),
    [purchaseRequestID, setPurchaseRequestID] = useState(''),
    [detailPendingID, setDetailPendingID] = useState(null),
    [extraordinary, setExtraordinary] = useState(false),
    [station, setStation] = useState('guerra'),
    [business, setBusiness] = useState('gasStation'),
    [providerID, setProviderID] = useState(''),
    [paymentMethod, setPaymentMethod] = useState('cash'),
    [pettyCash, setPettyCash] = useState(false),
    [details, setDetails] = useState([]),
    [charge, setCharge] = useState(''),
    [concept, setConcept] = useState(''),
    [movementType, setMovementType] = useState('advance'),
    [observation, setObservation] = useState(''),
    [totalAmount, setTotalAmount] = useState(0),
    [paymentAmount, setPaymentAmount] = useState(0),
    [showPendingPayments, setShowPendingPayments] = useState(false),
    [fileType, setFileType] = useState('quotation'),
    [files, setFiles] = useState([]),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { loading, providers } = useSelector((state) => state.provider),
    { pendingPayments } = useSelector((state) => state.purchaseRequest),
    hasPayPermission = useHasPermission('purchaseRequest', 'pay'),
    hasRejectPermission = useHasPermission('purchaseRequest', 'reject'),
    hasAuthorizePermission = useHasPermission('purchaseRequest', 'authorize')

  useEffect(() => {
    dispatch(selectProviders())
  }, [dispatch])

  useEffect(() => {
    if (!providerID || providerID === '') {
      return
    }
    dispatch(getPendingPaymentsByProvider(providerID))
    setShowPendingPayments(false)
    if (!purchaseData) {
      setDetails([])
    }
  }, [dispatch, providerID, purchaseData])

  useEffect(() => {
    if (!purchaseData) {
      return
    }
    setPurchaseRequestID(purchaseData.id)
    setExtraordinary(purchaseData.extraordinary)
    setStation(purchaseData.station)
    setBusiness(purchaseData.business)
    setProviderID(purchaseData.provider.id)
    setPaymentMethod(purchaseData.paymentMethod)
    setPettyCash(purchaseData.pettyCash)
    setDetails(purchaseData.details)
  }, [purchaseData])

  useEffect(() => {
    setPettyCash(false)
  }, [paymentMethod])

  useEffect(() => {
    if (movementType === 'settlement') {
      setPaymentAmount(totalAmount)
    }
  }, [movementType, totalAmount])

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
              { observation, user_id: 1 },
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
        approvePurchaseRequest({ user_id: 1 }, purchaseRequestID, (purchaseRequestRes) => {
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

  const onAddDetail = () => {
    if (charge === '') {
      dispatch(setToast(AppToast({ msg: 'Selecciona un cargo', type: 'error' })))
      return
    }
    if (concept === '') {
      return
    }
    const data = {
      charge,
      concept,
      movementType,
      observation,
      totalAmount,
      paymentAmount,
      purchase_detail_pending_id: detailPendingID,
    }
    setDetails([...details, data])
    clearDetailInputs()
  }

  const onRemoveDetail = (index) => {
    setDetails(details.filter((d, i) => i !== index))
  }

  const onAddDetailPending = (detail) => {
    setCharge(detail.charge)
    setConcept(detail.concept)
    setObservation(detail.observation)
    setMovementType('settlement')
    setTotalAmount(detail.balance)
    setDetailPendingID(detail.id)
    setShowPendingPayments(false)
  }

  const onRemoveDetailPending = () => {
    clearDetailInputs()
    setShowPendingPayments(false)
  }

  const clearDetailInputs = () => {
    setCharge('')
    setConcept('')
    setMovementType('advance')
    setObservation('')
    setTotalAmount(0)
    setPaymentAmount(0)
    setDetailPendingID(null)
  }

  const clearGeneralInputs = () => {
    setPurchaseRequestID('')
    setExtraordinary(false)
    setStation('guerra')
    setBusiness('gasStation')
    setProviderID('')
    setPaymentMethod('cash')
    setPettyCash(false)
    setDetails([])
    setFiles([])
  }

  const onSave = (e) => {
    e.preventDefault()
    try {
      if (!providerID || providerID === '') {
        dispatch(
          setToast(
            AppToast({
              msg: 'Falta seleccionar un proveedor',
              type: 'error',
            }),
          ),
        )
        return
      }
      if (details.length <= 0) {
        dispatch(
          setToast(
            AppToast({
              msg: 'Falta agregar detalles a la solicitud',
              type: 'error',
            }),
          ),
        )
        return
      }

      let data = {
        extraordinary,
        station,
        business,
        paymentMethod,
        pettyCash,
        details,
        provider_id: providerID,
        petitioner_id: 1,
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
    onClose()
    clearGeneralInputs()
  }

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="xl">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">
          {purchaseData ? `Editar solicitud` : 'Nueva solicitud'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {files.length > 0 && (
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
              Detalles
            </CNavLink>
          </CNavItem>
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 3}
              component="button"
              role="tab"
              aria-controls="account-tab-pane"
              aria-selected={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Archivos
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* purchase request data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormCheck
                  id="extraordinary"
                  label="Solicitud extraordinaria"
                  checked={extraordinary}
                  onChange={(e) => setExtraordinary(e.target.checked)}
                />
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel>Estación solicitante</CFormLabel>
                  <CFormSelect
                    aria-label="station"
                    options={[
                      { label: 'Guerra', value: 'guerra' },
                      { label: 'Servicio el milagro', value: 'milagro' },
                      { label: 'Estadio', value: 'estadio' },
                    ]}
                    onChange={(e) => setStation(e.target.value)}
                    value={station}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel>Negocio</CFormLabel>
                  <CFormSelect
                    aria-label="business"
                    options={[
                      { label: 'Gasolinera', value: 'gasStation' },
                      { label: 'Max store', value: 'store' },
                      { label: 'Restaurante', value: 'restaurant' },
                      { label: 'Pension', value: 'pension' },
                    ]}
                    onChange={(e) => setBusiness(e.target.value)}
                    value={business}
                  />
                </div>
              </div>

              <div className="mb-3">
                <CFormLabel>Proveedor (*)</CFormLabel>
                <CFormSelect
                  aria-label="provider"
                  onChange={(e) => setProviderID(e.target.value)}
                  value={providerID}
                  disabled={view || purchaseData}
                >
                  <option>Seleccione...</option>
                  {providers.data.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel>Forma de pago</CFormLabel>
                <CFormSelect
                  aria-label="paymentMethod"
                  options={[
                    { label: 'Transferencia', value: 'transference' },
                    { label: 'Cheque', value: 'check' },
                    { label: 'Efectivo', value: 'cash' },
                  ]}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  value={paymentMethod}
                />
              </div>
              {paymentMethod === 'cash' && (
                <div className="mb-3">
                  <CFormCheck
                    id="PCash"
                    label="Caja chica"
                    onChange={(e) => setPettyCash(e.target.checked)}
                    checked={pettyCash}
                  />
                </div>
              )}
            </CForm>
          </CTabPane>
          {/* Details */}
          <CTabPane role="tabpanel" aria-labelledby="account-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              {!showPendingPayments ? (
                <>
                  <div className="mb-3 d-flex">
                    <div className="flex-fill me-2">
                      <CFormLabel>Cargo</CFormLabel>
                      <CFormSelect
                        aria-label="charge"
                        options={[
                          { label: 'Seleccione...', value: '' },
                          { label: 'ACTIVO FIJO', value: 'ACTIVO FIJO' },
                          {
                            label: 'GASTOS DIRECTOS DE OPERACIÓN',
                            value: 'GASTOS DIRECTOS DE OPERACIÓN',
                          },
                        ]}
                        onChange={(e) => setCharge(e.target.value)}
                        value={charge}
                        disabled={detailPendingID}
                      />
                    </div>
                    <div className="flex-fill me-2">
                      <CFormLabel>Concepto</CFormLabel>
                      <CFormSelect
                        aria-label="concept"
                        options={[
                          { label: 'Seleccione...', value: '' },
                          {
                            label: 'Equipo y software informático',
                            value: 'Equipo y software informático',
                          },
                          { label: 'Vehículos', value: 'Vehículos' },
                          { label: 'Honorarios', value: 'Honorarios' },
                        ]}
                        onChange={(e) => setConcept(e.target.value)}
                        value={concept}
                        disabled={detailPendingID}
                      />
                    </div>
                    <div className="flex-fill">
                      <CFormLabel>Tipo de movimiento</CFormLabel>
                      <CFormSelect
                        aria-label="movementType"
                        onChange={(e) => setMovementType(e.target.value)}
                        value={movementType}
                      >
                        {!detailPendingID && <option value={'advance'}>Anticipo</option>}
                        <option value={'settlement'}>Liquidación</option>
                        {detailPendingID && <option value={'payment'}>Abono a cuenta</option>}
                      </CFormSelect>
                    </div>
                  </div>
                  <div className="mb-3">
                    <CFormTextarea
                      id="obs"
                      label="Observación"
                      rows={2}
                      text="Debe tener entre 5 y 10 palabras."
                      value={observation}
                      onChange={(e) => setObservation(e.target.value)}
                    ></CFormTextarea>
                  </div>
                  <div className="mb-3 d-flex">
                    <div className="flex-fill me-2">
                      <CFormLabel htmlFor="totalAmount">Importe total ($)</CFormLabel>
                      <CFormInput
                        type="number"
                        id="totalAmount"
                        placeholder="Importe"
                        onChange={(e) => setTotalAmount(e.target.value)}
                        value={totalAmount}
                        disabled={detailPendingID}
                      />
                    </div>
                    <div className="flex-fill">
                      <CFormLabel htmlFor="paymentAmount">Importe a pagar ($)</CFormLabel>
                      <CFormInput
                        type="number"
                        id="paymentAmount"
                        placeholder="Pago"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        value={paymentAmount}
                        disabled={movementType === 'settlement'}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <ModalFormPendingPaymentsTable
                  onAddDetailPending={(detail) => onAddDetailPending(detail)}
                  onRemoveDetailPending={() => onRemoveDetailPending()}
                  detailPendingID={detailPendingID}
                  details={details}
                />
              )}
              <div className="mb-3">
                {!showPendingPayments && (
                  <CButton
                    color="primary"
                    className="text-light fw-semibold me-2"
                    onClick={onAddDetail}
                  >
                    <CIcon icon={cilPlus} className="me-1" />
                    Añadir a la solicitud
                  </CButton>
                )}
                {pendingPayments.length > 0 && providerID && (
                  <CButton
                    color={showPendingPayments ? 'danger' : 'info'}
                    className="text-light fw-semibold"
                    onClick={() => setShowPendingPayments(!showPendingPayments)}
                  >
                    <CIcon icon={cilDollar} className="me-1" />
                    {showPendingPayments ? 'Ocultar' : 'Ver'} pagos pendientes
                  </CButton>
                )}
              </div>
              <CTable striped responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipo Mov.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Obs.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Importe total</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pago</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Saldo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Opciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {details.map((detail, i) => (
                    <CTableRow key={detail.concept}>
                      <CTableDataCell>{detail.charge}</CTableDataCell>
                      <CTableDataCell>{detail.concept}</CTableDataCell>
                      <CTableDataCell>{movementTypes[detail.movementType]}</CTableDataCell>
                      <CTableDataCell>{detail.observation}</CTableDataCell>
                      <CTableDataCell>{formatNumber(detail.totalAmount)}</CTableDataCell>
                      <CTableDataCell>{formatNumber(detail.paymentAmount)}</CTableDataCell>
                      <CTableDataCell>
                        {formatNumber(Math.round(detail.totalAmount - detail.paymentAmount))}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="danger"
                          variant="outline"
                          title="Eliminar"
                          onClick={() => onRemoveDetail(i)}
                        >
                          <CIcon icon={cilTrash} size="sm" />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                  {details.length > 0 && (
                    <CTableRow>
                      <CTableDataCell colSpan={5}></CTableDataCell>
                      <CTableDataCell scope="col" colSpan={3}>
                        $
                        {formatNumber(details.reduce((a, e) => a + parseFloat(e.paymentAmount), 0))}
                      </CTableDataCell>
                    </CTableRow>
                  )}
                </CTableBody>
              </CTable>
            </CForm>
          </CTabPane>
          {/* files purchase request */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <CFormLabel>Sube archivos necesarios para la solicitud</CFormLabel>
              <div className="mb-3">
                <div className="mb-2">
                  <CFormLabel>Tipo de archivo</CFormLabel>
                  <CFormSelect
                    aria-label="fileType"
                    options={[
                      { label: 'Cotización ', value: 'quotation' },
                      { label: 'Factura', value: 'invoice' },
                      { label: 'Otro', value: 'other' },
                    ]}
                    onChange={(e) => setFileType(e.target.value)}
                    value={fileType}
                  />
                </div>
                <CFormInput
                  type="file"
                  id="csfFile"
                  placeholder="nombre"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                  text="Archivos permitidos jpg, pdf, png, xlxs (10 MB)"
                />
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
            {purchaseData.status !== 'approved' && hasAuthorizePermission && (
              <CButton color="success" className="text-light fw-semibold" onClick={onApprove}>
                Autorizar
              </CButton>
            )}
            {purchaseData.status === 'approved' && hasPayPermission && (
              <CButton color="info" className="text-light fw-semibold">
                Pagar
              </CButton>
            )}
            {hasRejectPermission && (
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
