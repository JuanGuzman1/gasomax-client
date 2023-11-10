import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteProvider } from 'src/actions/provider'
import ProviderModalForm from './ProviderModalForm'

const ProviderTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [providerData, setProviderData] = useState(null),
    dispatch = useDispatch()

  const onDelete = (id) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar.',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProvider(id))
        Swal.fire({
          title: 'Eliminado!',
          text: 'El proveedor ha sido eliminado.',
          icon: 'success',
        })
      }
    })
  }
  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
            <CTableHeaderCell scope="col">Contacto</CTableHeaderCell>
            <CTableHeaderCell scope="col">RFC</CTableHeaderCell>
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
              <CTableDataCell>{provider.rfc}</CTableDataCell>
              <CTableDataCell>{provider.address}</CTableDataCell>
              <CTableDataCell>{provider.phone}</CTableDataCell>
              <CTableDataCell>{provider.email}</CTableDataCell>
              <CTableDataCell>
                <CButton
                  color="warning"
                  onClick={() => {
                    setVisible(!visible)
                    setProviderData(provider)
                  }}
                >
                  <CIcon icon={cilPencil} title="Editar" />
                </CButton>
                <CButton color="danger" onClick={() => onDelete(provider.id)}>
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
      <ProviderModalForm
        visible={visible}
        onClose={() => setVisible(false)}
        providerData={providerData}
      />
    </>
  )
}

export default ProviderTable
