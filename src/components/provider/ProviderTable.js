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

const ProviderTable = ({ data }) => {
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
        {data?.map((provider) => (
          <CTableRow key={provider.id}>
            <CTableHeaderCell scope="row">{provider.id}</CTableHeaderCell>
            <CTableDataCell>{provider.name}</CTableDataCell>
            <CTableDataCell>{provider.contact}</CTableDataCell>
            <CTableDataCell>{provider.address}</CTableDataCell>
            <CTableDataCell>{provider.phone}</CTableDataCell>
            <CTableDataCell>{provider.email}</CTableDataCell>
            <CTableDataCell>
              <CButton color="warning">
                <CIcon icon={cilPencil} title="Editar" />
              </CButton>
              <CButton color="danger">
                <CIcon icon={cilTrash} title="Eliminar" />
              </CButton>
              <CButton color="primary">
                <CIcon icon={cilCloudDownload} title="Descargar CSF" />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default ProviderTable
