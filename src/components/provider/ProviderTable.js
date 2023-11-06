import React from 'react'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash, cilCloudDownload } from '@coreui/icons'

const ProviderTable = () => {
  return (
    <CTable striped responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
          <CTableHeaderCell scope="col">Contacto</CTableHeaderCell>
          <CTableHeaderCell scope="col">Dirección</CTableHeaderCell>
          <CTableHeaderCell scope="col">Teléfono</CTableHeaderCell>
          <CTableHeaderCell scope="col">Correo electrónico</CTableHeaderCell>
          <CTableHeaderCell scope="col">Opciones</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>Provedor 1</CTableDataCell>
          <CTableDataCell>Juan</CTableDataCell>
          <CTableDataCell>Av. universidad #340</CTableDataCell>
          <CTableDataCell>444444444</CTableDataCell>
          <CTableDataCell>juan@email.com</CTableDataCell>
          <CTableDataCell>
            <CButton color="warning">
              <CIcon icon={cilPencil} title="Download file" />
            </CButton>
            <CButton color="danger">
              <CIcon icon={cilTrash} title="Download file" />
            </CButton>
            <CButton color="primary">
              <CIcon icon={cilCloudDownload} title="Download file" />
            </CButton>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">2</CTableHeaderCell>
          <CTableDataCell>Telmex</CTableDataCell>
          <CTableDataCell>Pedro</CTableDataCell>
          <CTableDataCell>Buenos aires piso 3</CTableDataCell>
          <CTableDataCell>444444444</CTableDataCell>
          <CTableDataCell>pedro@email.com</CTableDataCell>
          <CTableDataCell>
            <CButton color="warning">
              <CIcon icon={cilPencil} title="Download file" />
            </CButton>
            <CButton color="danger">
              <CIcon icon={cilTrash} title="Download file" />
            </CButton>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell>Espectaculares SA.DE.CV</CTableDataCell>
          <CTableDataCell>Paco</CTableDataCell>
          <CTableDataCell>Lomas #203</CTableDataCell>
          <CTableDataCell>444444444</CTableDataCell>
          <CTableDataCell>espectaculares@email.com</CTableDataCell>
          <CTableDataCell>
            <CButton color="warning">
              <CIcon icon={cilPencil} title="Download file" />
            </CButton>
            <CButton color="danger">
              <CIcon icon={cilTrash} title="Download file" />
            </CButton>
            <CButton color="primary">
              <CIcon icon={cilCloudDownload} title="Download file" />
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default ProviderTable
