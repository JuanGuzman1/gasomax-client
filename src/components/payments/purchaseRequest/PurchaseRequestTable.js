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
import PurchaseRequestModalForm from './PurchaseRequestModalForm'
import PurchaseRequestModalObs from './PurchaseRequestModalObs'

const PurchaseRequestTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [visibleObs, setVisibleObs] = useState(false),
    [purchaseData, setPurchaseData] = useState(null),
    dispatch = useDispatch()

  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Solicitante</CTableHeaderCell>
            <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
            <CTableHeaderCell scope="col">Importe</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
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
            <CTableDataCell>$3000</CTableDataCell>
            <CTableDataCell>11/Feb/2023</CTableDataCell>
            <CTableDataCell>
              <CBadge color="warning">Pendiente</CBadge>
            </CTableDataCell>
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
                    }}
                  >
                    Editar
                  </CDropdownItem>
                  <CDropdownItem style={{ cursor: 'pointer' }}>Eliminar</CDropdownItem>
                  <CDropdownItem
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setVisibleObs(!visibleObs)
                    }}
                  >
                    Ver observaciones
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <PurchaseRequestModalForm
        visible={visible}
        onClose={() => setVisible(false)}
        purchaseData={purchaseData}
      />
      <PurchaseRequestModalObs visible={visibleObs} onClose={() => setVisibleObs(false)} />
    </>
  )
}

export default PurchaseRequestTable
