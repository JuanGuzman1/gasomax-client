import React, { useEffect, useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CButton,
  CFormTextarea,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPurchaseRequestObservation,
  getPurchaseRequestObservations,
} from 'src/actions/purchaseRequest'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { formatTimezoneToDateTime } from 'src/utils/functions'

const PurchaseRequestModalObs = ({ visible, onClose, purchaseRequestID }) => {
  const dispatch = useDispatch(),
    [message, setMessage] = useState(''),
    { observations, loadingObservations } = useSelector((state) => state.purchaseRequest),
    user = useSelector((state) => state.auth.user)?.data?.user

  useEffect(() => {
    dispatch(getPurchaseRequestObservations(purchaseRequestID))
  }, [dispatch, purchaseRequestID])

  const onSave = (e) => {
    e.preventDefault()
    try {
      if (!message || message === '') {
        dispatch(setToast(AppToast({ msg: 'Escribe un mensaje', title: 'Error', type: 'error' })))
        return
      }
      let data = {
        message,
        user_id: user.id,
        purchase_request_id: purchaseRequestID,
      }
      dispatch(
        addPurchaseRequestObservation(data, (purchaseRequestObservationRes) => {
          if (purchaseRequestObservationRes.success) {
            dispatch(
              setToast(
                AppToast({
                  msg: 'Mensaje guardado con exito',
                  title: 'Observacion',
                  type: 'success',
                }),
              ),
            )
          } else {
            dispatch(
              setToast(
                AppToast({ msg: 'Ha ocurrido un error', title: 'Observacion', type: 'error' }),
              ),
            )
          }
        }),
      )
    } catch (error) {
      console.log(error)
    }
    setMessage('')
  }

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="ModalForm">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="ModalForm">Observaciones</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {loadingObservations ? (
          <div className="d-flex justify-content-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        ) : (
          <>
            <CTable striped responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Observación</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {observations?.map((observation) => (
                  <CTableRow key={observation.id}>
                    <CTableDataCell>{observation.user.name}</CTableDataCell>
                    <CTableDataCell>{observation.message}</CTableDataCell>
                    <CTableDataCell>
                      {formatTimezoneToDateTime(observation.created_at)}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormTextarea
                  id="obs"
                  label="Observación"
                  rows={2}
                  text="Debe tener entre 8 y 20 palabras."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></CFormTextarea>
              </div>
            </CForm>
          </>
        )}
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
        <CButton color="primary" className="text-light fw-semibold" onClick={onSave}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default PurchaseRequestModalObs
