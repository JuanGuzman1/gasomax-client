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
import BankModalForm from './BankModalForm'
import { deleteBank } from 'src/actions/bank'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'

const BankTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [bankData, setBankData] = useState(null),
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
        dispatch(
          deleteBank(id, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Banco eliminado correctamente.',
                    title: 'Bancos',
                    type: 'success',
                  }),
                ),
              )
              Swal.fire({
                title: 'Eliminado!',
                text: 'El banco ha sido eliminado.',
                icon: 'success',
              })
            } else {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Ocurrio un error.',
                    title: 'Bancos',
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
            <CTableHeaderCell scope="col">Banco</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((bank) => (
            <CTableRow key={bank.id}>
              <CTableHeaderCell scope="row">{bank.id}</CTableHeaderCell>
              <CTableDataCell>{bank.name}</CTableDataCell>
              <CTableDataCell className="text-center overflow-visible">
                <CDropdown variant="dropdown">
                  <CDropdownToggle href="#" color="light">
                    <CIcon icon={cilOptions} title="Opciones" size="lg" />
                  </CDropdownToggle>
                  <CDropdownMenu className="position-fixed">
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setVisible(!visible)
                        setBankData(bank)
                      }}
                    >
                      Editar
                    </CDropdownItem>
                    <CDropdownItem style={{ cursor: 'pointer' }} onClick={() => onDelete(bank.id)}>
                      Eliminar
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <BankModalForm visible={visible} onClose={() => setVisible(false)} bankData={bankData} />
    </>
  )
}

export default BankTable
