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
import { cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { fileTags } from 'src/utils/fileTags'
import { FileCard, AppToast } from '../../app'
import Swal from 'sweetalert2'
import { formatNumber, useHasPermission } from 'src/utils/functions'
import { selectAccountsByProvider, selectProviders } from 'src/actions/provider'
import { setToast } from 'src/actions/toast'
import { uploadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'
import { getCharges, getConceptsByCharge } from 'src/actions/quoteConcept'
import { addQuote, getQuotes, sendPay, updateQuote, uploadQuoteFile } from 'src/actions/quote'
import { getLines, getUnitsByLine } from 'src/actions/unit'
import QuoteModalObs from './QuoteModalObs'
import { selectDepartments } from 'src/actions/department'

const QuoteModalForm = ({ visible, onClose, quoteData, view }) => {
  const [activeKey, setActiveKey] = useState(1),
    [quoteID, setQuoteID] = useState(''),
    [title, setTitle] = useState(''),
    [charge, setCharge] = useState(''),
    [departmentID, setDepartmentID] = useState(''),
    [quoteConceptID, setQuoteConceptID] = useState(''),
    [description, setDescription] = useState(''),
    [imgFiles, setImgFiles] = useState([]),
    [quoteFiles, setQuoteFiles] = useState([]),
    [invoiceFile, setInvoiceFile] = useState(null),
    [descriptionQuote, setDescriptionQuote] = useState(''),
    [numProviders, setNumProviders] = useState(0),
    [recommendedProviders, setRecommendedProviders] = useState([]),
    [recommendedProvidersInput, setRecommendedProvidersInput] = useState([]),
    [suggestedProvider, setSuggestedProvider] = useState(''),
    [line, setLine] = useState(''),
    [unit, setUnit] = useState(''),
    [selectedQuoteID, setSelectedQuoteID] = useState(''),
    [rejectQuotes, setRejectQuotes] = useState(false),
    [approvedAmount, setApprovedAmount] = useState(0),
    [providerID, setProviderID] = useState(''),
    [providerAccountID, setProviderAccountID] = useState(''),
    [quoteProvider, setQuoteProvider] = useState(''),
    [quoteAmount, setQuoteAmount] = useState(0),
    [deliveryDate, setDeliveryDate] = useState(''),
    [paymentWithoutInvoice, setPaymentWithoutInvoice] = useState(false),
    [onePayment, setOnePayment] = useState(false),
    [multiplePayments, setMultiplePayments] = useState(false),
    [observation, setObservation] = useState(''),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { providers, accounts } = useSelector((state) => state.provider),
    hasPayPermission = useHasPermission('quotes', 'pay'),
    hasRejectPermission = useHasPermission('quotes', 'reject'),
    hasApprovePermission = useHasPermission('quotes', 'approve'),
    hasAuthorizeMinor5000Permission = useHasPermission('quotes', 'authorize.minor.5000'),
    hasAuthorizeMayor5000Permission = useHasPermission('quotes', 'authorize.mayor.5000'),
    hasUploadQuotePermission = useHasPermission('quotes', 'upload.quote'),
    inputImgFile = useRef(),
    inputQuoteFile = useRef(),
    inputInvoiceFile = useRef(),
    user = useSelector((state) => state.auth.user)?.data?.user,
    charges = useSelector((state) => state.quoteConcept.charges),
    concepts = useSelector((state) => state.quoteConcept.concepts),
    departments = useSelector((state) => state.department.departments),
    lines = useSelector((state) => state.unit.lines),
    units = useSelector((state) => state.unit.units),
    { quotes, filters, progress: progressQuoteFile } = useSelector((state) => state.quote),
    [visibleObs, setVisibleObs] = useState(false)

  useEffect(() => {
    dispatch(selectProviders())
  }, [dispatch])

  useEffect(() => {
    dispatch(getLines())
    dispatch(selectDepartments())
  }, [dispatch])

  useEffect(() => {
    if (!line) {
      return
    }
    dispatch(getUnitsByLine(line))
  }, [dispatch, line])

  useEffect(() => {
    if (!departmentID) {
      return
    }
    dispatch(getCharges(departmentID))
  }, [dispatch, departmentID])

  useEffect(() => {
    if (!charge) {
      return
    }
    dispatch(getConceptsByCharge(charge))
  }, [dispatch, charge])

  useEffect(() => {
    if (!providerID) {
      return
    }
    dispatch(selectAccountsByProvider(providerID))
  }, [dispatch, providerID])

  useEffect(() => {
    let array = []
    for (let i = 0; i < numProviders; i++) {
      array.push(i)
    }
    setRecommendedProvidersInput(array)
  }, [numProviders])

  useEffect(() => {
    if (onePayment) {
      setMultiplePayments(false)
    }
  }, [onePayment])

  useEffect(() => {
    if (multiplePayments) {
      setOnePayment(false)
    }
  }, [multiplePayments])

  useEffect(() => {
    if (!quoteData) {
      return
    }
    setQuoteID(quoteData.id)
    setTitle(quoteData.title)
    setDescription(quoteData.description)
    setDepartmentID(quoteData.quote_concept.department_id)
    setCharge(quoteData.quote_concept.charge)
    setQuoteConceptID(quoteData.quote_concept.id)
    setLine(quoteData.line)
    setUnit(quoteData.unit)
    setNumProviders(quoteData.numProviders)
    setRecommendedProviders(JSON.parse(quoteData.recommendedProviders))
    setImgFiles(quoteData.images)
    setQuoteFiles(quoteData.files)
    setSelectedQuoteID(quoteData.files.find((file) => file.selectedQuoteFile)?.id)
    setRejectQuotes(quoteData.rejectQuotes)
    setApprovedAmount(quoteData.approvedAmount)
    setOnePayment(quoteData.onePayment)
    setMultiplePayments(quoteData.multiplePayments)
    setSuggestedProvider(quoteData.suggestedProvider)
  }, [quoteData])

  const onSelectRecommendedProvider = (e, i) => {
    if (e.target.value === '') {
      setRecommendedProviders(recommendedProviders.filter((v, index) => index !== i))
      return
    }
    let newArr = [...recommendedProviders]
    newArr[i] = e.target.value ? e.target.value : ''

    setRecommendedProviders(newArr)
  }

  const onPay = () => {
    try {
      let data = {
        provider_id: providerID,
        provider_account_id: providerAccountID,
        paymentWithoutInvoice,
        status: 'sentPay',
      }
      dispatch(
        sendPay(data, quoteID, (sendPayRes) => {
          if (sendPayRes.success) {
            dispatch(
              setToast(
                AppToast({
                  msg: 'Solicitud enviada a pago',
                  title: 'Solicitudes de compra',
                  type: 'success',
                }),
              ),
            )
          } else {
            dispatch(
              setToast(
                AppToast({
                  msg: sendPayRes.message,
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

  const onAddFiles = (e) => {
    if (!e.target.files[0]) {
      return
    }
    let data = {
      localName: e.target.files[0].name,
      file: e.target.files[0],
    }
    if (inputImgFile.current.value) {
      setImgFiles([...imgFiles, { ...data, tag: fileTags.img }])
      inputImgFile.current.value = ''
    }
  }

  const onAddQuoteFiles = () => {
    if (inputQuoteFile.current.value) {
      setQuoteFiles([
        ...quoteFiles,
        {
          localName: inputQuoteFile.current.files[0].name,
          file: inputQuoteFile.current.files[0],
          tag: fileTags.quotation,
          description: descriptionQuote,
          provider: quoteProvider,
          amount: quoteAmount,
          deliveryDate,
        },
      ])
      inputQuoteFile.current.value = ''
      setDescriptionQuote('')
      setQuoteProvider('')
      setQuoteAmount(0)
      setDeliveryDate('')
    }
  }

  const clearGeneralInputs = useCallback(() => {
    setImgFiles([])
  }, [])

  const onSave = (e) => {
    e.preventDefault()
    try {
      if (!title || title === '') {
        dispatch(
          setToast(
            AppToast({
              msg: 'Falta agregar un titulo',
              type: 'error',
            }),
          ),
        )
        return
      }
      let status

      if (rejectQuotes) {
        status = 'rejected'
      } else if (approvedAmount > 0) {
        status = 'approved'
      } else {
        status = 'sent'
      }

      let data = {
        title,
        provider_id: providerID,
        petitioner_id: user.id,
        quote_concept_id: quoteConceptID,
        description,
        numProviders,
        recommendedProviders: JSON.stringify(recommendedProviders),
        line,
        unit,
        rejectQuotes,
        approvedAmount,
        observation,
        onePayment,
        multiplePayments,
        suggestedProvider,
        status,
        selectedQuoteID,
      }
      dispatch(
        quoteData
          ? updateQuote(data, quoteID, (quoteRes) => {
              if (quoteRes.success) {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Solicitud actualizada correctamente.',
                      title: 'Solicitudes de compra',
                      type: 'success',
                    }),
                  ),
                )
                onUploadImgFile(quoteRes.data)
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
          : addQuote(data, (quoteRes) => {
              if (quoteRes.success) {
                dispatch(
                  setToast(
                    AppToast({
                      msg: 'Solicitud realizada correctamente.',
                      title: 'Solicitudes de compra',
                      type: 'success',
                    }),
                  ),
                )
                onUploadImgFile(quoteRes.data)
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

  const onUploadImgFile = (quoteRes) => {
    if (imgFiles.length > 0) {
      Promise.all(
        imgFiles.map((file) => {
          if (!file.id) {
            return dispatch(
              uploadFile(file.file, file.tag, null, quoteRes.id, modelTypes.quote, () => {}),
            )
          } else {
            onClose()
            clearGeneralInputs()
          }
        }),
      ).finally(() => {
        dispatch(getQuotes(quotes.current_page, filters.filter, filters.value))
      })
    } else {
      onClose()
      clearGeneralInputs()
    }
  }

  const onUploadQuoteFile = (e) => {
    e.preventDefault()
    try {
      dispatch(
        updateQuote(
          { status: 'inprogress', rejectQuotes: false, approvedAmount: 0 },
          quoteID,
          (quoteRes) => {
            if (quoteRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Solicitud actualizada correctamente.',
                    title: 'Solicitudes de compra',
                    type: 'success',
                  }),
                ),
              )
              if (quoteFiles.length > 0) {
                Promise.all(
                  quoteFiles.map((file) => {
                    if (!file.id) {
                      let data = {
                        file: file.file,
                        tag: file.tag,
                        description: file.description,
                        provider: file.provider,
                        amount: file.amount,
                        deliveryDate: file.deliveryDate,
                        quote_id: quoteID,
                      }
                      return dispatch(uploadQuoteFile(data, () => {}))
                    } else {
                      onClose()
                      clearGeneralInputs()
                    }
                  }),
                ).finally(() => {
                  dispatch(getQuotes(quotes.current_page, filters.filter, filters.value))
                })
              } else {
                onClose()
                clearGeneralInputs()
              }
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
          },
        ),
      )
    } catch (error) {
      console.log(error)
    }
  }

  const onAuthorize = (e) => {
    e.preventDefault()
    try {
      dispatch(
        updateQuote({ status: 'authorized' }, quoteID, (quoteRes) => {
          if (quoteRes.success) {
            dispatch(
              setToast(
                AppToast({
                  msg: 'Solicitud actualizada correctamente.',
                  title: 'Solicitudes de compra',
                  type: 'success',
                }),
              ),
            )

            onClose()
            clearGeneralInputs()
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

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onClose()
        clearGeneralInputs()
      }, 3000)
    }
  }, [progress, onClose, clearGeneralInputs])

  useEffect(() => {
    if (progressQuoteFile === 100) {
      setTimeout(() => {
        onClose()
        clearGeneralInputs()
      }, 3000)
    }
  }, [progressQuoteFile, onClose, clearGeneralInputs])

  useEffect(() => {
    if (rejectQuotes) {
      setApprovedAmount(0)
    }
  }, [rejectQuotes])

  useEffect(() => {
    if (!selectedQuoteID) {
      setApprovedAmount(0)
      return
    }
    let quote = quoteData?.files?.find((f) => f.id === selectedQuoteID)
    if (quote) {
      setApprovedAmount(quote.amount)
    }
  }, [selectedQuoteID, quoteData])

  return (
    <>
      <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="xl">
        <CModalHeader onClose={onClose}>
          <CModalTitle id="ModalForm">
            {quoteData ? `${view ? '' : 'Editar'} Solicitud ${quoteData.title}` : 'Nueva Solicitud'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {imgFiles.length > 0 && imgFiles.some((file) => !file.id) && (
            <CProgress value={progress} className="mb-2">
              {progress}%
            </CProgress>
          )}
          {quoteFiles.length > 0 && quoteFiles.some((file) => !file.id) && (
            <CProgress value={progressQuoteFile} className="mb-2">
              {progressQuoteFile}%
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
            {view && (
              <CNavItem role="presentation">
                <CNavLink
                  active={activeKey === 2}
                  component="button"
                  role="tab"
                  aria-controls="account-tab-pane"
                  aria-selected={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Cotizaciónes
                </CNavLink>
              </CNavItem>
            )}
            {view && quoteData.status === 'authorized' && hasPayPermission && (
              <CNavItem role="presentation">
                <CNavLink
                  active={activeKey === 3}
                  component="button"
                  role="tab"
                  aria-controls="account-tab-pane"
                  aria-selected={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Selección de cuenta y proveedor
                </CNavLink>
              </CNavItem>
            )}
          </CNav>
          <CTabContent>
            {/* Quote data */}
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
                <div className="mb-3 d-flex">
                  <div className="flex-md-fill me-2">
                    <CFormLabel>Departamento</CFormLabel>
                    <CFormSelect
                      aria-label="department"
                      onChange={(e) => setDepartmentID(e.target.value)}
                      value={departmentID}
                      disabled={view}
                    >
                      <option value={''}>Selecciona...</option>
                      {departments.data.map(({ id, name }) => (
                        <option key={name} value={id}>
                          {name}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="flex-md-fill me-2">
                    <CFormLabel>Cargo</CFormLabel>
                    <CFormSelect
                      aria-label="charge"
                      onChange={(e) => setCharge(e.target.value)}
                      value={charge}
                      disabled={view}
                    >
                      <option value={''}>Selecciona...</option>
                      {charges.map(({ charge }) => (
                        <option key={charge} value={charge}>
                          {charge}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="flex-md-fill me-2">
                    <CFormLabel>Concepto</CFormLabel>
                    <CFormSelect
                      aria-label="concept"
                      onChange={(e) => setQuoteConceptID(e.target.value)}
                      value={quoteConceptID}
                      disabled={view}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={view}
                  ></CFormTextarea>
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
                    id="onePayment"
                    label="Pago en una sola exhibición"
                    checked={onePayment}
                    onChange={(e) => setOnePayment(e.target.checked)}
                    disabled={view}
                  />
                </div>
                <div className="mb-3">
                  <CFormCheck
                    id="multiplePayments"
                    label="Múltiples pagos"
                    checked={multiplePayments}
                    onChange={(e) => setMultiplePayments(e.target.checked)}
                    disabled={view}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <div className="flex-fill">
                    <CFormLabel>Giro</CFormLabel>
                    <CFormSelect
                      aria-label="line"
                      onChange={(e) => setLine(e.target.value)}
                      value={line}
                      disabled={view}
                    >
                      <option value={''}>Selecciona...</option>
                      {lines.map((l) => (
                        <option value={l.line} key={l.line}>
                          {l.line}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="flex-fill mx-2">
                    <CFormLabel>Unidad</CFormLabel>
                    <CFormSelect
                      aria-label="unit"
                      onChange={(e) => setUnit(e.target.value)}
                      value={unit}
                      disabled={view}
                    >
                      <option value={''}>Selecciona...</option>
                      {units.data.map(({ id, unit }) => (
                        <option key={id} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="flex-fill">
                    <CFormLabel htmlFor="recommendedProviders">Cotizaciónes requeridas</CFormLabel>
                    <CFormInput
                      type="number"
                      id="recommendedProviders"
                      placeholder="No Cotizaciónes"
                      onChange={(e) => setNumProviders(e.target.value)}
                      value={numProviders}
                      max={5}
                      min={0}
                      disabled={view}
                    />
                  </div>
                </div>
                {recommendedProvidersInput.map((x, i) => (
                  <div className="mb-3" key={x}>
                    <CFormLabel>Proveedor recomendado {x + 1}</CFormLabel>
                    <CFormSelect
                      aria-label="charge"
                      onChange={(e) => onSelectRecommendedProvider(e, i)}
                      value={recommendedProviders[i]}
                      disabled={view}
                    >
                      <option value={''}>Selecciona...</option>
                      {providers.data.map(({ id, name }) => (
                        <option key={id} value={name}>
                          {name}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                ))}
                {numProviders > 0 && (
                  <div className="mb-3">
                    <CFormLabel>Proveedor sugerido</CFormLabel>
                    <CFormInput
                      type="text"
                      id="suggestedProvider"
                      placeholder="Proveedor sugerido"
                      value={suggestedProvider}
                      onChange={(e) => setSuggestedProvider(e.target.value)}
                      disabled={view}
                    />
                  </div>
                )}
              </CForm>
            </CTabPane>
            {/* Quote files */}
            <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 2}>
              <CForm className="mt-3">
                {hasUploadQuotePermission && quoteData.status !== 'authorized' && (
                  <>
                    <CFormLabel className="fs-5">
                      Añade las <b>Cotizaciónes</b> para la solicitud
                    </CFormLabel>
                    <div className="mb-3">
                      <CFormInput
                        ref={inputQuoteFile}
                        type="file"
                        id="quoteFile"
                        text="Archivos permitidos jpg, pdf, png, xlxs (10 MB)"
                      />
                    </div>
                    <div className="d-flex mb-3">
                      <div className="flex-fill">
                        <CFormLabel>Proveedor</CFormLabel>
                        <CFormInput
                          type="text"
                          id="quoteProvider"
                          placeholder="Proveedor"
                          value={quoteProvider}
                          onChange={(e) => setQuoteProvider(e.target.value)}
                        />
                      </div>
                      <div className="flex-fill mx-2">
                        <CFormLabel>Monto</CFormLabel>
                        <CFormInput
                          type="number"
                          id="amount"
                          placeholder="0"
                          value={quoteAmount}
                          onChange={(e) => setQuoteAmount(e.target.value)}
                        />
                      </div>
                      <div className="flex-fill">
                        <CFormLabel>Tiempo de entrega</CFormLabel>
                        <CFormInput
                          type="date"
                          id="deliveryDate"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <CFormTextarea
                        id="desc"
                        label="Descripción "
                        rows={2}
                        value={descriptionQuote}
                        onChange={(e) => setDescriptionQuote(e.target.value)}
                      ></CFormTextarea>
                    </div>
                    <CButton
                      color="primary"
                      className="text-light fw-semibold me-2"
                      onClick={onAddQuoteFiles}
                    >
                      <CIcon icon={cilPlus} className="me-1" />
                      Añadir a la solicitud
                    </CButton>
                  </>
                )}
                {quoteFiles.length > 0 ? (
                  <>
                    <CTable striped responsive>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">Datos</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Descripción</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Archivo Cotización</CTableHeaderCell>
                          {(hasApprovePermission ||
                            hasAuthorizeMinor5000Permission ||
                            hasPayPermission) && (
                            <CTableHeaderCell scope="col" className="text-center">
                              Aprobada
                            </CTableHeaderCell>
                          )}
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {quoteFiles.map((file, index) => (
                          <CTableRow key={file.name}>
                            <CTableDataCell>
                              <p>
                                <b>Monto: </b>${formatNumber(file.amount)}
                              </p>
                              <p>
                                <b>Proveedor: </b> {file.provider}
                              </p>
                              <p>
                                <b>Tiempo de entrega: </b> {file.deliveryDate}
                              </p>
                            </CTableDataCell>
                            <CTableDataCell>{file.description}</CTableDataCell>
                            <CTableDataCell>
                              <FileCard
                                file={file}
                                key={file.name}
                                onDelete={(id) => {
                                  return file.id
                                    ? setQuoteFiles(quoteFiles.filter((f) => f.id !== id))
                                    : setQuoteFiles(quoteFiles.filter((f, i) => index !== i))
                                }}
                                viewMode={view && !hasUploadQuotePermission}
                              />
                            </CTableDataCell>
                            {(hasApprovePermission ||
                              hasAuthorizeMinor5000Permission ||
                              hasPayPermission) && (
                              <CTableDataCell className="text-center">
                                <CFormCheck
                                  id="selectedQuoteID"
                                  checked={file.id === selectedQuoteID}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedQuoteID(file.id)
                                    } else {
                                      setSelectedQuoteID('')
                                    }
                                  }}
                                  disabled={
                                    quoteData.status === 'approved' ||
                                    quoteData.status === 'ok' ||
                                    quoteData.status === 'authorized'
                                  }
                                />
                              </CTableDataCell>
                            )}
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                    {(hasApprovePermission ||
                      quoteData.status === 'approved' ||
                      quoteData.status === 'ok' ||
                      quoteData.status === 'authorized') &&
                      view && (
                        <>
                          <div className="mb-3">
                            <CFormCheck
                              id="rejectQuotes"
                              label="Se descartan todas las cotizaciónes"
                              checked={rejectQuotes}
                              onChange={(e) => setRejectQuotes(e.target.checked)}
                              disabled={
                                quoteData.status === 'approved' ||
                                quoteData.status === 'ok' ||
                                quoteData.status === 'authorized'
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <CFormLabel htmlFor="approvedAmount">
                              Monto de cotización aprobada ($)
                            </CFormLabel>
                            <CFormInput
                              type="number"
                              id="approvedAmount"
                              placeholder="Importe"
                              onChange={(e) => setApprovedAmount(e.target.value)}
                              value={approvedAmount}
                              disabled={
                                rejectQuotes ||
                                quoteData.status === 'approved' ||
                                quoteData.status === 'ok' ||
                                quoteData.status === 'authorized'
                              }
                            />
                          </div>
                          {quoteData.status === 'rejected' ||
                          quoteData.status === 'approved' ||
                          quoteData.status === 'ok' ||
                          quoteData.status === 'authorized' ? (
                            <CButton
                              color="primary"
                              className="text-white"
                              onClick={() => setVisibleObs(true)}
                            >
                              Ver observaciones
                            </CButton>
                          ) : (
                            <div className="mb-3">
                              <CFormTextarea
                                id="obs"
                                label="Observación"
                                rows={2}
                                value={observation}
                                onChange={(e) => setObservation(e.target.value)}
                              ></CFormTextarea>
                            </div>
                          )}
                        </>
                      )}
                  </>
                ) : (
                  !hasUploadQuotePermission && (
                    <h3 className="text-center text-primary font-monospace">
                      No hay cotizaciónes disponibles
                    </h3>
                  )
                )}
              </CForm>
            </CTabPane>
            {/* Provider selection */}
            <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
              <CForm className="mt-3">
                <div className="mb-3 d-flex">
                  <div className="flex-md-fill me-2">
                    <CFormLabel>Proveedor</CFormLabel>
                    <CFormSelect
                      aria-label="provider"
                      onChange={(e) => setProviderID(e.target.value)}
                      value={providerID}
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
                <div className="mb-3">
                  <CFormLabel>
                    Sube la <b>factura</b> para la solicitud de pago
                  </CFormLabel>
                  <CFormInput
                    ref={inputInvoiceFile}
                    type="file"
                    id="invoiceFile"
                    onChange={(e) =>
                      setInvoiceFile({
                        tag: fileTags.invoice,
                        file: e.target.files[0],
                        localName: e.target.files[0].name,
                      })
                    }
                    text="Archivos permitidos jpg, pdf, jpeg (10 MB)"
                  />
                </div>
                {invoiceFile && (
                  <div className="mb-3 d-flex">
                    <FileCard
                      file={invoiceFile}
                      onDelete={(id) => {
                        setInvoiceFile(null)
                        inputInvoiceFile.current.value = ''
                      }}
                    />
                  </div>
                )}
                <div className="mb-3">
                  <CFormCheck
                    id="paymentWithoutInvoice"
                    label="Tramitar pago sin factura"
                    checked={paymentWithoutInvoice}
                    onChange={(e) => setPaymentWithoutInvoice(e.target.checked)}
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
          {view && quoteData.status === 'authorized' && hasPayPermission && (
            <CButton color="info" className="text-light fw-semibold" onClick={onPay}>
              Enviar a pago
            </CButton>
          )}

          {view && quoteData.status !== 'approved' && quoteData.status !== 'authorized' && (
            <CButton
              color="primary"
              className="text-light fw-semibold"
              onClick={(e) => {
                if (user.id !== quoteData.petitioner_id && hasUploadQuotePermission) {
                  onUploadQuoteFile(e)
                } else {
                  onSave(e) //for approve
                }
              }}
            >
              Guardar
            </CButton>
          )}

          {!view && (
            <CButton
              color="primary"
              className="text-light fw-semibold"
              onClick={(e) => {
                onSave(e)
              }}
            >
              Guardar
            </CButton>
          )}

          {hasAuthorizeMinor5000Permission && view && quoteData.status === 'approved' && (
            <CButton color="info" className="text-light fw-semibold" onClick={onAuthorize}>
              Autorizar
            </CButton>
          )}
          {hasAuthorizeMinor5000Permission && view && quoteData.status === 'approved' && (
            <CButton color="danger" className="text-light fw-semibold" onClick={onAuthorize}>
              Rechazar
            </CButton>
          )}
        </CModalFooter>
      </CModal>
      {visibleObs && (
        <QuoteModalObs
          quoteID={quoteData?.id}
          visible={visibleObs}
          onClose={() => setVisibleObs(false)}
        />
      )}
    </>
  )
}

export default QuoteModalForm
