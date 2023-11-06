import React, { useState } from 'react'
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
} from '@coreui/react'
import { cilPlus, cilTrash, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const ProviderModalForm = ({ visible, onClose }) => {
  const [activeKey, setActiveKey] = useState(1),
    [showInputsAccount, setShowInputsAccount] = useState(false),
    [provider, setProvider] = useState(),
    [type, setType] = useState('ext'),
    [contact, setContact] = useState(),
    [rfc, setRfc] = useState(),
    [address, setAddress] = useState(),
    [phone, setPhone] = useState(),
    [email, setEmail] = useState(),
    [accountingAccount, setAccountingAccount] = useState(),
    [bankAccount, setBankAccount] = useState(),
    [bank, setBank] = useState(),
    [clabe, setClabe] = useState()

  const onSave = (e) => {
    e.preventDefault()
    console.log('hola')
  }

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="LiveDemoExampleLabel" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="LiveDemoExampleLabel">Agregar nuevo</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CNav variant="tabs" role="tablist">
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
                <CFormInput type="text" id="provider" placeholder="nombre" />
              </div>
              <div className="mb-3">
                <CFormLabel>Tipo</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    { label: 'Interno', value: 'int' },
                    { label: 'Externo', value: 'ext' },
                  ]}
                />
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="contact">Contacto</CFormLabel>
                  <CFormInput type="text" id="contact" placeholder="contacto" />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="rfc">RFC</CFormLabel>
                  <CFormInput type="text" id="rfc" placeholder="RFC" />
                </div>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="address">Dirección</CFormLabel>
                <CFormInput type="text" id="address" placeholder="dirección" />
              </div>

              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="phone">Teléfono</CFormLabel>
                  <CFormInput type="text" id="phone" placeholder="teléfono" />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
                  <CFormInput type="email" id="email" placeholder="correo electrónico" />
                </div>
              </div>
            </CForm>
          </CTabPane>
          {/* bank accounts provider */}
          <CTabPane role="tabpanel" aria-labelledby="account-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="accountingAccount">Cuenta contable</CFormLabel>
                <CFormInput type="text" id="accountingAccount" placeholder="cuenta contable" />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <h5>Cuentas bancarias</h5>
                {!showInputsAccount && (
                  <CButton
                    type="button"
                    size="sm"
                    shape="rounded-3"
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
                    <CFormInput type="text" placeholder="Cuenta bancaria" />
                  </div>
                  <div className="flex-fill ms-2 me-2">
                    <CFormSelect
                      aria-label="caseFilter"
                      options={[
                        { label: 'Banorte', value: 'banorte' },
                        { label: 'Banamex', value: 'banamex' },
                        { label: 'Bancomer', value: 'bancomer' },
                        { label: 'Santander', value: 'bancomer' },
                      ]}
                    />
                  </div>
                  <div className="flex-fill">
                    <CFormInput type="email" placeholder="CLABE" />
                  </div>
                  <CButton
                    className="ms-2"
                    shape="rounded-3"
                    type="button"
                    size="sm"
                    title="Añadir"
                    onClick={() => setShowInputsAccount(false)}
                  >
                    <CIcon icon={cilCheckAlt} size="custom" />
                  </CButton>
                </div>
              )}
              <CTable striped responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
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
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Provedor 1</CTableDataCell>
                    <CTableDataCell>Juan</CTableDataCell>
                    <CTableDataCell className="text-center">Av. universidad #340</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon icon={cilCheckAlt} size="custom" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="success" variant="outline" title="Asignar principal">
                        <CIcon icon={cilCheckAlt} size="sm" />
                      </CButton>
                      <CButton color="danger" variant="outline" title="Eliminar">
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Telmex</CTableDataCell>
                    <CTableDataCell>Pedro</CTableDataCell>
                    <CTableDataCell className="text-center">Buenos aires piso 3</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>
                      <CButton color="success" variant="outline" title="Asignar principal">
                        <CIcon icon={cilCheckAlt} size="sm" />
                      </CButton>
                      <CButton color="danger" variant="outline" title="Eliminar">
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CForm>
          </CTabPane>
          {/* files provider */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Constancia de situación fiscal
                </CFormLabel>
                <CFormInput type="file" id="exampleFormControlInput1" placeholder="nombre" />
              </div>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
        <CButton color="primary" onClick={onSave}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ProviderModalForm
