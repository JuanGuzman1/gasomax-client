import React, { useState, useEffect, useCallback } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CFormCheck,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { assignModules } from 'src/actions/user'

const UserModulesModalForm = ({ visible, onClose, userData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [banks, setBanks] = useState(false),
    [providers, setProviders] = useState(false),
    [quotes, setQuotes] = useState(false),
    [purchaseRequest, setPurchaseRequest] = useState(false),
    [pendingPayments, setPendingPayments] = useState(false),
    [departments, setDepartments] = useState(false),
    [users, setUsers] = useState(false),
    [modules, setModules] = useState([]),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.user.loading)

  const onSave = (e) => {
    e.preventDefault()
    let data = {
      user_id: userID,
      modules,
    }
    dispatch(
      assignModules(data, (assignRes) => {
        if (assignRes.success) {
          dispatch(setToast(AppToast({ msg: assignRes.message, type: 'success' })))
        }
      }),
    )
    onClose()
  }

  const onAddModules = (checked, module, fromDB = false) => {
    if (!fromDB) {
      if (checked) {
        setModules([...modules, module])
      } else {
        setModules(modules.filter((m) => m !== module))
      }
    }

    if (module === 'banks') {
      setBanks(checked)
    }
    if (module === 'providers') {
      setProviders(checked)
    }
    if (module === 'quotes') {
      setQuotes(checked)
    }
    if (module === 'purchaseRequest') {
      setPurchaseRequest(checked)
    }
    if (module === 'pendingPayments') {
      setPendingPayments(checked)
    }
    if (module === 'departments') {
      setDepartments(checked)
    }
    if (module === 'users') {
      setUsers(checked)
    }
  }

  useEffect(() => {
    if (!userData) {
      return
    }
    setUserID(userData.id)
    let modulesDB = []
    if (userData.modules) {
      userData.modules.forEach((m) => {
        onAddModules(true, m.module.submodule, true)
        modulesDB.push(m.module.submodule)
      })
      setModules(modulesDB)
    }
  }, [userData])

  console.log(modules)

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="UserModulesModal" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="UserModulesModal">{`Asignar modulos a ${userData.name}`}</CModalTitle>
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
              Modulos
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* Modules Available */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              {/* Administration modules */}
              <div className="mb-3">
                <h5>Administración</h5>
                <div className="row row-cols-3">
                  <div className="col">
                    <CFormCheck
                      id={'banks'}
                      label={'Bancos'}
                      checked={banks}
                      onChange={(e) => onAddModules(e.target.checked, 'banks')}
                    />
                  </div>
                  <div className="col">
                    <CFormCheck
                      id={'providers'}
                      label={'Proveedores'}
                      checked={providers}
                      onChange={(e) => onAddModules(e.target.checked, 'providers')}
                    />
                  </div>
                </div>
              </div>
              {/* Payment modules */}
              <div className="mb-3">
                <h5>Pagos</h5>
                <div className="row row-cols-3">
                  <div className="col">
                    <CFormCheck
                      id={'quotes'}
                      label={'Solicitud de compra'}
                      checked={quotes}
                      onChange={(e) => onAddModules(e.target.checked, 'quotes')}
                    />
                  </div>
                  <div className="col">
                    <CFormCheck
                      id={'purchaseRequest'}
                      label={'Solicitud de pago'}
                      checked={purchaseRequest}
                      onChange={(e) => onAddModules(e.target.checked, 'purchaseRequest')}
                    />
                  </div>
                  <div className="col">
                    <CFormCheck
                      id={'pendingPayments'}
                      label={'Pagos pendientes'}
                      checked={pendingPayments}
                      onChange={(e) => onAddModules(e.target.checked, 'pendingPayments')}
                    />
                  </div>
                </div>
              </div>
              {/* User modules */}
              <div className="mb-3">
                <h5>Usuarios</h5>
                <div className="row row-cols-3">
                  <div className="col">
                    <CFormCheck
                      id={'departments'}
                      label={'Departamentos'}
                      checked={departments}
                      onChange={(e) => onAddModules(e.target.checked, 'departments')}
                    />
                  </div>
                  <div className="col">
                    <CFormCheck
                      id={'users'}
                      label={'Usuarios'}
                      checked={users}
                      onChange={(e) => onAddModules(e.target.checked, 'users')}
                    />
                  </div>
                </div>
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

export default UserModulesModalForm
