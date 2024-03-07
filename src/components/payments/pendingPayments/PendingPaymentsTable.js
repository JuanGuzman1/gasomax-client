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
import PendingPaymentsModalBalance from './PendingPaymentsModalBalance'

const PendingPaymentsTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [purchaseRequestDetailID, setPurchaseRequestDetailID] = useState(null),
    [provider, setProvider] = useState(''),
    dispatch = useDispatch()

  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
            <CTableHeaderCell scope="col">Solicitante</CTableHeaderCell>
            <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
            <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
            <CTableHeaderCell scope="col">Titulo</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fecha solic.</CTableHeaderCell>
            <CTableHeaderCell scope="col">Saldo</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((pr) => (
            <CTableRow key={pr.id}>
              <CTableDataCell>{pr.quote.provider.name}</CTableDataCell>
              <CTableDataCell>{pr.petitioner.name}</CTableDataCell>
              <CTableDataCell>{pr.quote.quote_concept.charge}</CTableDataCell>
              <CTableDataCell>{pr.quote.quote_concept.concept}</CTableDataCell>
              <CTableDataCell>{pr.title}</CTableDataCell>
              <CTableDataCell>{formatTimezoneToDate(pr.created_at)}</CTableDataCell>
              <CTableDataCell>${formatNumber(pr.balance)}</CTableDataCell>
              <CTableDataCell className="text-center overflow-visible">
                <CDropdown variant="dropdown">
                  <CDropdownToggle href="#" color="light">
                    <CIcon icon={cilOptions} title="Opciones" size="lg" />
                  </CDropdownToggle>
                  <CDropdownMenu className="position-fixed">
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setProvider(pr.quote.provider.name)
                        setPurchaseRequestDetailID(pr.id)
                        setVisible(!visible)
                      }}
                    >
                      Ver estado de cuenta
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {visible && (
        <PendingPaymentsModalBalance
          visible={visible}
          onClose={() => {
            setVisible(false)
            setPurchaseRequestDetailID(null)
            setProvider('')
          }}
          purchaseRequestDetailID={purchaseRequestDetailID}
          provider={provider}
        />
      )}
    </>
  )
}

export default PendingPaymentsTable
