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
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteProvider } from 'src/actions/provider'
import { fileTags } from 'src/utils/fileTags'
import { deleteFilesByModel, downloadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'

const PurchaseTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [providerData, setProviderData] = useState(null),
    dispatch = useDispatch()

  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Solicitante</CTableHeaderCell>
            <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
            <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
            <CTableHeaderCell scope="col">Monto</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Juan Guzman</CTableDataCell>
            <CTableDataCell>Provedor 1</CTableDataCell>
            <CTableDataCell>concepto x</CTableDataCell>
            <CTableDataCell>$3000</CTableDataCell>
            <CTableDataCell>
              <CBadge color="warning">Pendiente</CBadge>
            </CTableDataCell>
            <CTableDataCell className="text-center overflow-visible">
              <CDropdown variant="dropdown">
                <CDropdownToggle href="#" color="light">
                  <CIcon icon={cilOptions} title="Opciones" size="lg" />
                </CDropdownToggle>
                <CDropdownMenu className="position-fixed">
                  <CDropdownItem style={{ cursor: 'pointer' }}>Editar</CDropdownItem>
                  <CDropdownItem style={{ cursor: 'pointer' }}>Eliminar</CDropdownItem>
                  <CDropdownItem style={{ cursor: 'pointer' }}>Ver observaciones</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      {/* <ProviderModalForm
        visible={visible}
        onClose={() => setVisible(false)}
        providerData={providerData}
      /> */}
    </>
  )
}

export default PurchaseTable
