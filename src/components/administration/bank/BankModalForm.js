import React, { useState, useEffect, useCallback } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addBank, updateBank } from 'src/actions/bank'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'

const BankModalForm = ({ visible, onClose, bankData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [bankID, setBankID] = useState(),
    [bank, setBank] = useState(),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.bank.loading)

  const onSave = (e) => {
    e.preventDefault()
    if (!bank) {
      alert('Ingrese un nombre')
      return
    }
    let data = {
      name: bank,
    }
    dispatch(
      bankData
        ? updateBank(data, bankID, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Banco actualizado correctamente.',
                    title: 'Bancos',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Bancos', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          })
        : addBank(data, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Banco agregado correctamente.',
                    title: 'Bancos',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Bancos', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          }),
    )
  }

  const cleanInputs = useCallback(() => {
    setBank()
    setActiveKey(1)
  }, [])

  useEffect(() => {
    if (!bankData) {
      return
    }
    setBankID(bankData.id)
    setBank(bankData.name)
  }, [bankData])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="LiveDemoExampleLabel" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="LiveDemoExampleLabel">
          {bankData ? `Editar ${bankData.name}` : 'Agregar nuevo'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CNav variant="tabs" role="tablist" className="mt-1">
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 1}
              component="button"
              role="tab"
              aria-controls="data-tab-pane"
              aria-selected={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              Datos
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* bank data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="bank">Banco</CFormLabel>
                <CFormInput
                  type="text"
                  id="bank"
                  placeholder="nombre"
                  onChange={(e) => setBank(e.target.value)}
                  value={bank}
                />
              </div>
            </CForm>
          </CTabPane>
        </CTabContent>
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

export default BankModalForm
