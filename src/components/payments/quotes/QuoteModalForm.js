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
import { setToast } from 'src/actions/toast'
import { uploadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'
import { getCharges, getConceptsByCharge } from 'src/actions/quoteConcept'

const QuoteModalForm = ({ visible, onClose, quoteData, view }) => {
  const [activeKey, setActiveKey] = useState(1),
    [quoteID, setQuoteID] = useState(''),
    [title, setTitle] = useState(''),
    [charge, setCharge] = useState(''),
    [quoteConceptID, setQuoteConceptID] = useState(''),
    [description, setDescription] = useState(''),
    [files, setFiles] = useState([]),
    [numProviders, setNumProviders] = useState(0),
    [recommendedProviders, setRecommendedProviders] = useState([]),
    [line, setLine] = useState(''),
    [unit, setUnit] = useState(''),
    [rejectQuotes, setRejectQuotes] = useState(false),
    [approvedAmount, setApprovedAmount] = useState(0),
    [providerID, setProviderID] = useState(''),
    [providerAccountID, setProviderAccountID] = useState(''),
    [paymentWithoutInvoice, setPaymentWithoutInvoice] = useState(false),
    [observation, setObservation] = useState(''),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { loading, providers } = useSelector((state) => state.provider),
    inputFile = useRef(),
    hasPayPermission = useHasPermission('quote', 'pay'),
    hasRejectPermission = useHasPermission('quote', 'reject'),
    hasAuthorizePermission = useHasPermission('quote', 'authorize'),
    user = useSelector((state) => state.auth.user)?.data?.user,
    charges = useSelector((state) => state.quoteConcept.charges),
    concepts = useSelector((state) => state.quoteConcept.concepts)

  useEffect(() => {
    dispatch(selectProviders())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCharges())
  }, [dispatch])

  useEffect(() => {
    dispatch(getConceptsByCharge(charge))
  }, [dispatch, charge])

  useEffect(() => {
    if (!quoteData) {
      return
    }

    setFiles(quoteData.files)
  }, [quoteData])

  const onApprove = (e) => {
    e.preventDefault()
    try {
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
      file: e.target.files[0],
    }
    setFiles([...files, data])
    inputFile.current.value = ''
  }

  const clearGeneralInputs = useCallback(() => {
    setFiles([])
  }, [])

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
    } catch (error) {
      console.log(error)
    }
  }

  const onUploadFile = (quotationRes) => {
    if (files) {
      Promise.all(
        files.map((file) => {
          if (!file.id) {
            return dispatch(
              uploadFile(
                file.file,
                file.tag,
                quotationRes.id,
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

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="xl">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">
          {quoteData ? `Editar solicitud` : 'Nueva solicitud'}
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
              active={activeKey === 3}
              component="button"
              role="tab"
              aria-controls="account-tab-pane"
              aria-selected={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Cotizaciónes
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* purchase request data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel>Cargo</CFormLabel>
                  <CFormSelect
                    aria-label="charge"
                    onChange={(e) => setCharge(e.target.value)}
                    value={charge}
                  >
                    <option value={''}>Selecciona...</option>
                    {charges.map(({ charge }) => (
                      <option key={charge} value={charge}>
                        {charge}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
                <div className="flex-fill me-2">
                  <CFormLabel>Concepto</CFormLabel>
                  <CFormSelect
                    aria-label="concept"
                    onChange={(e) => setQuoteConceptID(e.target.value)}
                    value={quoteConceptID}
                  >
                    <option value={''}>Selecciona...</option>
                    {concepts.data.map(({ id, concept }) => (
                      <option key={id} value={id}>
                        {concept}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
              </div>
              <div className="mb-3">
                <CFormTextarea
                  id="desc"
                  label="Descripción "
                  rows={2}
                  text="Debe tener entre 5 y 10 palabras."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CFormLabel>
                  Sube <b>imágenes</b> para la solicitud (opcional)
                </CFormLabel>
                <CFormInput
                  ref={inputFile}
                  type="file"
                  id="csfFile"
                  onChange={onAddFiles}
                  text="Archivos permitidos jpg, png, jpeg (10 MB)"
                />
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill">
                  <CFormLabel>Giro</CFormLabel>
                  <CFormSelect
                    aria-label="station"
                    options={[
                      { label: 'Guerra', value: 'guerra' },
                      { label: 'Servicio el milagro', value: 'milagro' },
                      { label: 'Estadio', value: 'estadio' },
                    ]}
                    onChange={(e) => setLine(e.target.value)}
                    value={line}
                  />
                </div>
                <div className="flex-fill mx-2">
                  <CFormLabel>Unidad</CFormLabel>
                  <CFormSelect
                    aria-label="business"
                    options={[
                      { label: 'Gasolinera', value: 'gasStation' },
                      { label: 'Max store', value: 'store' },
                      { label: 'Restaurante', value: 'restaurant' },
                      { label: 'Pension', value: 'pension' },
                    ]}
                    onChange={(e) => setUnit(e.target.value)}
                    value={unit}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="recommendedProviders">Cotizaciónes requeridas</CFormLabel>
                  <CFormInput
                    type="number"
                    id="recommendedProviders"
                    placeholder="No Cotizaciónes"
                    onChange={(e) => setNumProviders(e.target.value)}
                    value={numProviders}
                  />
                </div>
              </div>
            </CForm>
          </CTabPane>
          {/* quotes files request */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <CFormLabel className="fs-5">
                Sube las <b>Cotizaciónes</b> para la solicitud
              </CFormLabel>
              <div className="mb-3">
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
            {quoteData.status !== 'paid' &&
              quoteData.status !== 'approved' &&
              hasAuthorizePermission && (
                <CButton color="success" className="text-light fw-semibold" onClick={onApprove}>
                  Autorizar
                </CButton>
              )}
            {quoteData.status === 'approved' && hasPayPermission && (
              <CButton color="info" className="text-light fw-semibold" onClick={onPay}>
                Pagar
              </CButton>
            )}
          </>
        )}
      </CModalFooter>
    </CModal>
  )
}

export default QuoteModalForm
