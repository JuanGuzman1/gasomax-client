import React, { useEffect, useState } from 'react'
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilMinus, cilDollar } from '@coreui/icons'
import { formatNumber, movementTypes } from 'src/utils/functions'
import { useSelector } from 'react-redux'

const ModalFormPendingPaymentsTable = ({
  onAddDetailPending,
  onRemoveDetailPending,
  detailPendingID,
}) => {
  const { pendingPayments } = useSelector((state) => state.purchaseRequest),
    [pendingPaymentsFiltered, setPendingPaymentsFiltered] = useState([])

  useEffect(() => {
    setPendingPaymentsFiltered(pendingPayments)
  }, [pendingPayments])

  return (
    <CTable striped responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Opciones</CTableHeaderCell>
          <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
          <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
          <CTableHeaderCell scope="col">Obs.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Saldo pendiente</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {pendingPaymentsFiltered.map((detail, i) => (
          <CTableRow key={detail.id}>
            <CTableDataCell>
              {detailPendingID !== detail.id ? (
                <CButton
                  color="primary"
                  variant="outline"
                  title="Agregar"
                  onClick={() => onAddDetailPending(detail)}
                >
                  <CIcon icon={cilPlus} size="sm" />
                </CButton>
              ) : (
                <CButton
                  color="danger"
                  variant="outline"
                  title="Quitar"
                  onClick={() => onRemoveDetailPending()}
                >
                  <CIcon icon={cilMinus} size="sm" />
                </CButton>
              )}
            </CTableDataCell>
            <CTableDataCell>{detail.quote.quote_concept.charge}</CTableDataCell>
            <CTableDataCell>{detail.quote.quote_concept.concept}</CTableDataCell>
            <CTableDataCell>{detail.title}</CTableDataCell>
            <CTableDataCell>${formatNumber(detail.balance)}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default ModalFormPendingPaymentsTable
