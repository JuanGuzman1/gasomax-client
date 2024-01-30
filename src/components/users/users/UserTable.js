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
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { deleteUser } from 'src/actions/user'
import UserModalForm from './UserModalForm'
import UserModulesModalForm from './UserModulesModalForm'
import UserPermissionsModalForm from './UserPermissionsModalForm'
import { useHasPermission } from 'src/utils/functions'

const UserTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [visibleModules, setVisibleModules] = useState(false),
    [visiblePermissions, setVisiblePermissions] = useState(false),
    [userData, setUserData] = useState(null),
    dispatch = useDispatch(),
    hasDeletePermission = useHasPermission('users', 'delete'),
    hasEditPermission = useHasPermission('users', 'edit'),
    hasModulesPermission = useHasPermission('users', 'modules'),
    hasPermissionsPermission = useHasPermission('users', 'permissions')

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
          deleteUser(id, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Usuario eliminado correctamente.',
                    title: 'Usuarios',
                    type: 'success',
                  }),
                ),
              )
              Swal.fire({
                title: 'Eliminado!',
                text: 'El Usuario ha sido eliminado.',
                icon: 'success',
              })
            } else {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Ocurrio un error.',
                    title: 'Usuarios',
                    type: 'error',
                  }),
                ),
              )
            }
          }),
        )
      }
    })
  }

  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
            <CTableHeaderCell scope="col">Correo electrónico</CTableHeaderCell>
            <CTableHeaderCell scope="col">Departamento</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((user) => (
            <CTableRow key={user.id}>
              <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>
              <CTableDataCell>{user.name}</CTableDataCell>
              <CTableDataCell>{user.email}</CTableDataCell>
              <CTableDataCell>
                {user?.department?.name || (
                  <span className="text-primary fw-bolder">Sin departamento asignado</span>
                )}
              </CTableDataCell>
              <CTableDataCell className="text-center overflow-visible">
                <CDropdown variant="dropdown">
                  <CDropdownToggle href="#" color="light">
                    <CIcon icon={cilOptions} title="Opciones" size="lg" />
                  </CDropdownToggle>
                  <CDropdownMenu className="position-fixed">
                    {hasModulesPermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVisibleModules(!visibleModules)
                          setUserData(user)
                        }}
                      >
                        Asignar modulos
                      </CDropdownItem>
                    )}
                    {hasPermissionsPermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVisiblePermissions(!visiblePermissions)
                          setUserData(user)
                        }}
                      >
                        Permisos
                      </CDropdownItem>
                    )}
                    {hasEditPermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setVisible(!visible)
                          setUserData(user)
                        }}
                      >
                        Editar
                      </CDropdownItem>
                    )}
                    {hasDeletePermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => onDelete(user.id)}
                      >
                        Eliminar
                      </CDropdownItem>
                    )}
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {visible && (
        <UserModalForm visible={visible} onClose={() => setVisible(false)} userData={userData} />
      )}
      {visibleModules && (
        <UserModulesModalForm
          visible={visibleModules}
          onClose={() => setVisibleModules(false)}
          userData={userData}
        />
      )}
      {visiblePermissions && (
        <UserPermissionsModalForm
          visible={visiblePermissions}
          onClose={() => setVisiblePermissions(false)}
          userData={userData}
        />
      )}
    </>
  )
}

export default UserTable
