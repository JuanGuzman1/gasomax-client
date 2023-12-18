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
import { cilPlus, cilTrash, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { fileTags } from 'src/utils/fileTags'
import { FileCard, AppToast } from '../../app'

const PurchaseRequestModalForm = ({ visible, onClose, purchaseData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [showInputsAccount, setShowInputsAccount] = useState(false),
    [provider, setProvider] = useState(''),
    [type, setType] = useState('ext'),
    [paymentMethod, setPaymentMethod] = useState('cash'),
    [contact, setContact] = useState(''),
    [rfc, setRfc] = useState(''),
    [files, setFiles] = useState([]),
    dispatch = useDispatch(),
    { progress } = useSelector((state) => state.file),
    { loading, providers, filters } = useSelector((state) => state.provider),
    { banks } = useSelector((state) => state.bank)

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="xl">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">
          {purchaseData ? `Editar ${purchaseData.name}` : 'Nueva solicitud'}
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
                <CFormLabel>Proveedor</CFormLabel>
                <CFormSelect
                  aria-label="provider"
                  options={[
                    { label: 'Muebles y Maderas', value: 'int' },
                    { label: 'Vidrios de SLP', value: 'ext' },
                  ]}
                  onChange={(e) => setProvider(e.target.value)}
                  value={provider}
                />
              </div>

              <div className="mb-3">
                <CFormCheck id="ext" label="Solicitud extraordinaria" />
              </div>
              <div className="mb-3">
                <CFormLabel>Forma de pago</CFormLabel>
                <CFormSelect
                  aria-label="paymentMethod"
                  options={[
                    { label: 'Transferencia', value: 'transfer' },
                    { label: 'Cheque', value: 'check' },
                    { label: 'Efectivo', value: 'cash' },
                  ]}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  value={paymentMethod}
                />
              </div>
              {paymentMethod === 'transfer' && (
                <div className="mb-3 d-flex">
                  <div className="flex-fill me-2">
                    <CFormLabel htmlFor="contact">Convenio</CFormLabel>
                    <CFormInput
                      type="text"
                      id="agreement"
                      placeholder="Convenio"
                      onChange={(e) => setContact(e.target.value)}
                      value={contact}
                    />
                  </div>
                  <div className="flex-fill">
                    <CFormLabel htmlFor="rfc">Referencia</CFormLabel>
                    <CFormInput
                      type="text"
                      id="reference"
                      placeholder="Referencia"
                      onChange={(e) => setRfc(e.target.value)}
                      value={rfc}
                    />
                  </div>
                </div>
              )}
              {paymentMethod === 'cash' && (
                <div className="mb-3">
                  <CFormCheck id="PCash" label="Caja chica" />
                </div>
              )}
            </CForm>
          </CTabPane>
          {/* Details */}
          <CTabPane role="tabpanel" aria-labelledby="account-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel>Cargo</CFormLabel>
                  <CFormSelect
                    aria-label="charge"
                    options={[
                      { label: 'ACTIVO FIJO', value: 'int' },
                      { label: 'GASTOS DIRECTOS DE OPERACIÓN', value: 'ext' },
                    ]}
                    onChange={(e) => setProvider(e.target.value)}
                    value={provider}
                  />
                </div>
                <div className="flex-fill me-2">
                  <CFormLabel>Concepto</CFormLabel>
                  <CFormSelect
                    aria-label="concept"
                    options={[
                      { label: 'Equipo y software informático', value: 'int' },
                      { label: 'Vehículos', value: 'ext' },
                      { label: 'Honorarios', value: 'ext' },
                    ]}
                    onChange={(e) => setProvider(e.target.value)}
                    value={provider}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel>Tipo de movimiento</CFormLabel>
                  <CFormSelect
                    aria-label="movementType"
                    options={[
                      { label: 'Anticipo', value: 'ant' },
                      { label: 'Liquidación ', value: 'liq' },
                      { label: 'Abono a cuenta', value: 'abo' },
                    ]}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value={paymentMethod}
                  />
                </div>
              </div>
              <div className="mb-3">
                <CFormTextarea
                  id="obs"
                  label="Observación"
                  rows={2}
                  text="Debe tener entre 8 y 20 palabras."
                ></CFormTextarea>
              </div>

              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="contact">Importe total ($)</CFormLabel>
                  <CFormInput
                    type="number"
                    id="import"
                    placeholder="Importe"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                  />
                </div>
                <div className="flex-fill">
                  <CFormLabel htmlFor="rfc">Importe a pagar ($)</CFormLabel>
                  <CFormInput
                    type="number"
                    id="payment"
                    placeholder="Pago"
                    onChange={(e) => setRfc(e.target.value)}
                    value={rfc}
                  />
                </div>
              </div>
              <div className="mb-3">
                <CButton color="primary" className="text-light fw-semibold">
                  <CIcon icon={cilPlus} className="me-1" />
                  Añadir a la solicitud
                </CButton>
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
                  <CTableRow>
                    <CTableDataCell>Activo fijo</CTableDataCell>
                    <CTableDataCell>Equipo y software informático</CTableDataCell>
                    <CTableDataCell>Anticipo</CTableDataCell>
                    <CTableDataCell>Se dara un anticipo a la cotizacion</CTableDataCell>
                    <CTableDataCell>3000</CTableDataCell>
                    <CTableDataCell>1000</CTableDataCell>
                    <CTableDataCell>2000</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="danger" variant="outline" title="Eliminar">
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Activo fijo</CTableDataCell>
                    <CTableDataCell>Equipo y software informático</CTableDataCell>
                    <CTableDataCell>Anticipo</CTableDataCell>
                    <CTableDataCell>Se dara un anticipo a la cotizacion</CTableDataCell>
                    <CTableDataCell>3000</CTableDataCell>
                    <CTableDataCell>1000</CTableDataCell>
                    <CTableDataCell>2000</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="danger" variant="outline" title="Eliminar">
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Activo fijo</CTableDataCell>
                    <CTableDataCell>Equipo y software informático</CTableDataCell>
                    <CTableDataCell>Anticipo</CTableDataCell>
                    <CTableDataCell>Se dara un anticipo a la cotizacion</CTableDataCell>
                    <CTableDataCell>3000</CTableDataCell>
                    <CTableDataCell>1000</CTableDataCell>
                    <CTableDataCell>2000</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="danger" variant="outline" title="Eliminar">
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell colSpan={5}></CTableDataCell>
                    <CTableDataCell scope="col" colSpan={3}>
                      3000
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CForm>
          </CTabPane>
          {/* files purchase request */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 3}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="csfFile">
                  Selecciona archivos necesarios para la solicitud (cotizacion, nota, factura)
                </CFormLabel>
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
        <CButton color="primary" className="text-light fw-semibold">
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default PurchaseRequestModalForm
