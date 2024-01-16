import React, { useEffect, useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CButton,
  CFormLabel,
  CFormInput,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { formatNumber, formatTimezoneToDateTime } from 'src/utils/functions'
import { getBalancePayments } from 'src/actions/pendingPayments'

const PendingPaymentsModalBalance = ({ visible, onClose, purchaseRequestDetailID, provider }) => {
  const dispatch = useDispatch(),
    [totalAmount, setTotalAmount] = useState(0),
    { balance, loadingBalance } = useSelector((state) => state.pendingPayments)

  useEffect(() => {
    dispatch(getBalancePayments(purchaseRequestDetailID))
  }, [dispatch, purchaseRequestDetailID])

  useEffect(() => {
    if (!balance) {
      return
    }
    setTotalAmount(balance.find((b) => !b.purchase_detail_pending_id).totalAmount)
  }, [balance])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">Estado de cuenta</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {loadingBalance ? (
          <div className="d-flex justify-content-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        ) : (
          <>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="provider">Proveedor</CFormLabel>
                <CFormInput type="text" id="provider" value={provider} disabled />
              </div>
              <div className="mb-3">
                <p>Importe total</p>
                <p id="totalAmount" className="fw-bold text-primary">
                  ${formatNumber(totalAmount)}
                </p>
                {/* <CFormInput type="number" id="totalAmount" value={totalAmount} disabled /> */}
              </div>
            </CForm>
            <CTable striped responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Concepto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Detalle</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Pago</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Saldo</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {balance?.map((balance) => (
                  <CTableRow key={balance.id}>
                    <CTableDataCell>{formatTimezoneToDateTime(balance.created_at)}</CTableDataCell>
                    <CTableDataCell>{balance.charge}</CTableDataCell>
                    <CTableDataCell>{balance.concept}</CTableDataCell>
                    <CTableDataCell>{balance.observation}</CTableDataCell>
                    <CTableDataCell>${formatNumber(balance.paymentAmount)}</CTableDataCell>
                    <CTableDataCell>
                      {balance.balance <= 0
                        ? '$' + formatNumber(balance.totalAmount - balance.paymentAmount)
                        : '$' + formatNumber(balance.balance)}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </>
        )}
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default PendingPaymentsModalBalance
