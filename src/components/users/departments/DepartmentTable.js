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
import DepartmentModalForm from './DepartmentModalForm'
import { deleteDepartment } from 'src/actions/department'
import { useHasPermission } from 'src/utils/functions'

const DepartmentTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [departmentData, setDepartmentData] = useState(null),
    dispatch = useDispatch(),
    hasDeletePermission = useHasPermission('departments', 'delete'),
    hasEditPermission = useHasPermission('departments', 'edit')

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
          deleteDepartment(id, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Departamento eliminado correctamente.',
                    title: 'Departamentos',
                    type: 'success',
                  }),
                ),
              )
              Swal.fire({
                title: 'Eliminado!',
                text: 'El departamento ha sido eliminado.',
                icon: 'success',
              })
            } else {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Ocurrio un error.',
                    title: 'Departamentos',
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
            <CTableHeaderCell scope="col">Departamento</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((department) => (
            <CTableRow key={department.id}>
              <CTableHeaderCell scope="row">{department.id}</CTableHeaderCell>
              <CTableDataCell>{department.name}</CTableDataCell>
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
                          setDepartmentData(department)
                        }}
                      >
                        Editar
                      </CDropdownItem>
                    )}
                    {hasDeletePermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => onDelete(department.id)}
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
      <DepartmentModalForm
        visible={visible}
        onClose={() => setVisible(false)}
        departmentData={departmentData}
      />
    </>
  )
}

export default DepartmentTable
