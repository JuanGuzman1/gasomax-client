import React, { useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteProvider } from 'src/actions/provider'
import ProviderModalForm from './ProviderModalForm'
import { fileTags } from 'src/utils/fileTags'
import { deleteFilesByModel, downloadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { useHasPermission } from 'src/utils/functions'

const ProviderTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [providerData, setProviderData] = useState(null),
    dispatch = useDispatch(),
    hasDeletePermission = useHasPermission('providers', 'delete'),
    hasEditPermission = useHasPermission('providers', 'edit')

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
        dispatch(
          deleteProvider(id, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Proveedor eliminado correctamente.',
                    title: 'Proveedores',
                    type: 'success',
                  }),
                ),
              )
              dispatch(deleteFilesByModel(id, modelTypes.provider))
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores', type: 'error' }),
                ),
              )
            }
          }),
        )
        Swal.fire({
          title: 'Eliminado!',
          text: 'El proveedor ha sido eliminado.',
          icon: 'success',
        })
      }
    })
  }

  const onDownload = (files) => {
    if (!files || files.length <= 0) {
      Swal.fire({
        title: 'CSF',
        text: 'No existe cedula cargada a este proveedor',
        icon: 'info',
      })
      return
    }
    const idCsfFile = files.find((file) => file.tag === fileTags.csf).id
    dispatch(downloadFile(idCsfFile))
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
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
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
              <CTableDataCell className="text-center overflow-visible">
                <CDropdown variant="dropdown">
                  <CDropdownToggle href="#" color="light">
                    <CIcon icon={cilOptions} title="Opciones" size="lg" />
                  </CDropdownToggle>
                  <CDropdownMenu className="position-fixed">
                    {hasEditPermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVisible(!visible)
                          setProviderData(provider)
                        }}
                      >
                        Editar
                      </CDropdownItem>
                    )}
                    {hasDeletePermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => onDelete(provider.id)}
                      >
                        Eliminar
                      </CDropdownItem>
                    )}
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => onDownload(provider.files)}
                    >
                      Descargar CSF
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
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
