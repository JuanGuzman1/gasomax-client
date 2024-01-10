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
  details,
}) => {
  const { pendingPayments } = useSelector((state) => state.purchaseRequest),
    [pendingPaymentsFiltered, setPendingPaymentsFiltered] = useState([])

  useEffect(() => {
    setPendingPaymentsFiltered(
      pendingPayments.filter(
        (pp) => !details.find((det) => det.purchase_detail_pending_id === pp.id),
      ),
    )
  }, [details, pendingPayments])

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
            <CTableDataCell>{detail.charge}</CTableDataCell>
            <CTableDataCell>{detail.concept}</CTableDataCell>
            <CTableDataCell>{detail.observation}</CTableDataCell>
            <CTableDataCell>{formatNumber(detail.balance)}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default ModalFormPendingPaymentsTable
