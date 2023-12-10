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
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormSelect,
  CProgress,
} from '@coreui/react'
import { cilPlus, cilTrash, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { addProvider, getProviders, updateProvider } from 'src/actions/provider'
import { uploadFile } from 'src/actions/file'
import { fileTags } from 'src/utils/fileTags'
import { modelTypes } from 'src/utils/modelTypes'
import { FileCard, AppToast } from '../../app'
import { selectBanks } from 'src/actions/bank'
import { setToast } from 'src/actions/toast'

const ProviderModalForm = ({ visible, onClose, providerData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [showInputsAccount, setShowInputsAccount] = useState(false),
    [providerID, setProviderID] = useState(),
    [provider, setProvider] = useState(''),
    [type, setType] = useState('ext'),
    [contact, setContact] = useState(''),
    [rfc, setRfc] = useState(''),
    [address, setAddress] = useState(''),
    [phone, setPhone] = useState(''),
    [email, setEmail] = useState(''),
    [accountingAccount, setAccountingAccount] = useState(''),
    [bankAccount, setBankAccount] = useState(''),
    [bank, setBank] = useState('1'),
    [clabe, setClabe] = useState(''),
    [bankAccounts, setBankAccounts] = useState([]),
    [csfFile, setCsfFile] = useState(null),
    [files, setFiles] = useState([]),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { loading, providers, filters } = useSelector((state) => state.provider),
    { banks } = useSelector((state) => state.bank)

  const onSave = (e) => {
    e.preventDefault()
    if (!provider) {
      alert('Ingrese un nombre')
      return
    }
    if (loading) {
      return
    }
    let data = {
      name: provider,
      type,
      contact,
      rfc,
      address,
      phone,
      email,
      accountingAccount,
      bankAccounts,
    }
    dispatch(
      providerData
        ? updateProvider(data, providerID, (providerRes) => {
            if (providerRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Proveedor actualizado correctamente.',
                    title: 'Proveedores',
                    type: 'success',
                  }),
                ),
              )
              onUploadFile(providerRes.data)
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores', type: 'error' }),
                ),
              )
            }
          })
        : addProvider(data, (providerRes) => {
            if (providerRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Proveedor agregado correctamente.',
                    title: 'Proveedores',
                    type: 'success',
                  }),
                ),
              )
              onUploadFile(providerRes.data)
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores', type: 'error' }),
                ),
              )
            }
          }),
    )
  }

  const onUploadFile = (providerRes) => {
    if (csfFile) {
      dispatch(
        uploadFile(csfFile, fileTags.csf, providerRes.id, modelTypes.provider, () => {
          dispatch(getProviders(providers.current_page, filters.filter, filters.value))
        }),
      )
    } else {
      onClose()
      cleanInputs()
    }
  }

  const onAddAccount = () => {
    setBankAccounts(
      bankAccounts.concat({
        bankAccount,
        bank_id: parseInt(bank),
        clabe,
      }),
    )
    setShowInputsAccount(false)
    setBankAccount('')
    setClabe('')
  }

  const onRemoveAccount = (index) => {
    setBankAccounts(bankAccounts.filter((v, i) => i !== index))
  }

  const onSetPrimaryAccount = (index) => {
    setBankAccounts(
      bankAccounts.map((b, i) => {
        if (i === index) {
          b.primary = true
        } else {
          b.primary = false
        }
        return b
      }),
    )
  }

  const cleanInputs = useCallback(() => {
    setProvider('')
    setType('ext')
    setContact('')
    setRfc('')
    setAddress('')
    setPhone('')
    setEmail('')
    setAccountingAccount('')
    setCsfFile(null)
    setActiveKey(1)
  }, [])

  useEffect(() => {
    if (!providerData) {
      return
    }
    setProviderID(providerData.id)
    setProvider(providerData.name)
    setType(providerData.type)
    setContact(providerData.contact ?? '')
    setRfc(providerData.rfc ?? '')
    setAddress(providerData.address ?? '')
    setPhone(providerData.phone ?? '')
    setEmail(providerData.email ?? '')
    setAccountingAccount(providerData.accountingAccount ?? '')
    setFiles(providerData.files)
    setBankAccounts(providerData.accounts)
  }, [providerData])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onClose()
        cleanInputs()
      }, 3000)
    }
  }, [progress, onClose, cleanInputs])

  useEffect(() => {
    dispatch(selectBanks())
  }, [dispatch])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">
          {providerData ? `Editar ${providerData.name}` : 'Agregar nuevo'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {csfFile && (
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
              Datos
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
              Cuentas
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
          {/* provider data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="provider">Proveedor</CFormLabel>
                <CFormInput
                  type="text"
                  id="provider"
                  placeholder="nombre"
                  onChange={(e) => setProvider(e.target.value)}
                  value={provider}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Tipo</CFormLabel>
                <CFormSelect
                  aria-label="type"
                  options={[
                    { label: 'Interno', value: 'int' },
                    { label: 'Externo', value: 'ext' },
                  ]}
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                />
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="contact">Contacto</CFormLabel>
                  <CFormInput
                    type="text"
                    id="contact"
                    placeholder="contacto"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="rfc">RFC</CFormLabel>
                  <CFormInput
                    type="text"
                    id="rfc"
                    placeholder="RFC"
                    onChange={(e) => setRfc(e.target.value)}
                    value={rfc}
                  />
                </div>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="address">Dirección</CFormLabel>
                <CFormInput
                  type="text"
                  id="address"
                  placeholder="dirección"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </div>

              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="phone">Teléfono</CFormLabel>
                  <CFormInput
                    type="number"
                    id="phone"
                    placeholder="teléfono"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    placeholder="correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
            </CForm>
          </CTabPane>
          {/* bank accounts provider */}
          <CTabPane role="tabpanel" aria-labelledby="account-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="accountingAccount">Cuenta contable</CFormLabel>
                <CFormInput
                  type="text"
                  id="accountingAccount"
                  placeholder="cuenta contable"
                  onChange={(e) => setAccountingAccount(e.target.value)}
                  value={accountingAccount}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <h5>Cuentas bancarias</h5>
                {!showInputsAccount && (
                  <CButton
                    type="button"
                    size="sm"
                    shape="rounded-3"
                    className="text-light fw-semibold"
                    title="Agregar"
                    onClick={() => setShowInputsAccount(true)}
                  >
                    <CIcon icon={cilPlus} size="custom" />
                  </CButton>
                )}
              </div>
              <hr />
              {showInputsAccount && (
                <div className="mb-3 d-flex">
                  <div className="flex-fill ">
                    <CFormInput
                      type="text"
                      placeholder="Cuenta bancaria"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                    />
                  </div>
                  <div className="flex-fill ms-2 me-2">
                    <CFormSelect
                      aria-label="caseFilter"
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                    >
                      {banks.data.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div className="flex-fill">
                    <CFormInput
                      type="text"
                      placeholder="CLABE"
                      value={clabe}
                      onChange={(e) => setClabe(e.target.value)}
                    />
                  </div>
                  <CButton
                    className="ms-2 text-light"
                    shape="rounded-3"
                    type="button"
                    size="sm"
                    title="Añadir"
                    onClick={onAddAccount}
                  >
                    <CIcon icon={cilCheckAlt} size="custom" />
                  </CButton>
                </div>
              )}
              <CTable striped responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Cuenta bancaria</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Banco</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      CLABE Interbancaria
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      Principal
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Opciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {bankAccounts.map((account, index) => (
                    <CTableRow key={account.clabe}>
                      <CTableDataCell>{account.bankAccount}</CTableDataCell>
                      <CTableDataCell>
                        {banks.data.find((b) => b.id === account.bank_id).name}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{account.clabe}</CTableDataCell>
                      <CTableDataCell>
                        {account.primary ? <CIcon icon={cilCheckAlt} size="custom" /> : null}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="success"
                          variant="outline"
                          title="Asignar principal"
                          className="me-2"
                          onClick={() => onSetPrimaryAccount(index)}
                        >
                          <CIcon icon={cilCheckAlt} size="sm" />
                        </CButton>
                        <CButton
                          color="danger"
                          variant="outline"
                          title="Eliminar"
                          onClick={() => onRemoveAccount(index)}
                        >
                          <CIcon icon={cilTrash} size="sm" />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CForm>
          </CTabPane>
          {/* files provider */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="csfFile">Constancia de situación fiscal</CFormLabel>
                {files.length <= 0 ? (
                  <CFormInput
                    type="file"
                    id="csfFile"
                    placeholder="nombre"
                    onChange={(e) => setCsfFile(e.target.files[0])}
                  />
                ) : (
                  <>
                    {files.map((file) => {
                      if (file.tag !== fileTags.csf) return null
                      return (
                        <FileCard
                          file={file}
                          key={file.tag}
                          onDelete={(id) => setFiles(files.filter((f) => f.id !== id))}
                        />
                      )
                    })}
                  </>
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
        <CButton color="primary" className="text-light fw-semibold" onClick={onSave}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ProviderModalForm
