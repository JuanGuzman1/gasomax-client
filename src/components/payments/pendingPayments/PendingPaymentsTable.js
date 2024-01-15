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
import { formatNumber, formatTimezoneToDate } from 'src/utils/functions'

const PendingPaymentsTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [purchaseData, setPurchaseData] = useState(null),
    dispatch = useDispatch()

  return (
    <CTable striped responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
          <CTableHeaderCell scope="col">Solicitante</CTableHeaderCell>
          <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
          <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
          <CTableHeaderCell scope="col">Observación</CTableHeaderCell>
          <CTableHeaderCell scope="col">Fecha solic.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Saldo</CTableHeaderCell>
          <CTableHeaderCell scope="col" className="text-center">
            Opciones
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data?.map((pr) =>
          pr.detailsFiltered.map((df) => (
            <CTableRow key={pr.id}>
              <CTableDataCell>{pr.provider.name}</CTableDataCell>
              <CTableDataCell>{pr.petitioner.name}</CTableDataCell>
              <CTableDataCell>{df.charge}</CTableDataCell>
              <CTableDataCell>{df.concept}</CTableDataCell>
              <CTableDataCell>{df.observation}</CTableDataCell>
              <CTableDataCell>{formatTimezoneToDate(pr.created_at)}</CTableDataCell>
              <CTableDataCell>${formatNumber(df.balance)}</CTableDataCell>
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
                      Ver estado de cuenta
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          )),
        )}
      </CTableBody>
    </CTable>
  )
}

export default PendingPaymentsTable
