import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CButton,
  CFormTextarea,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const PurchaseRequestModalObs = ({ visible, onClose }) => {
  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">Observaciones</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CTable striped responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
              <CTableHeaderCell scope="col">Observación</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>Juan</CTableDataCell>
              <CTableDataCell>Rechazado: Falta cotizacion.</CTableDataCell>
              <CTableDataCell>16/12/2023 13:00</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <CForm className="mt-3">
          <div className="mb-3">
            <CFormTextarea
              id="obs"
              label="Observación"
              rows={2}
              text="Debe tener entre 8 y 20 palabras."
            ></CFormTextarea>
          </div>
        </CForm>
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

export default PurchaseRequestModalObs
