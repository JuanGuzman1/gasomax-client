import React, { useState, useEffect } from 'react'
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

const UserPermissionsModalForm = ({ visible, onClose, userData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [banks, setBanks] = useState(false),
    [providers, setProviders] = useState(false),
    [purchaseRequest, setPurchaseRequest] = useState(false),
    [pendingPayments, setPendingPayments] = useState(false),
    [departments, setDepartments] = useState(false),
    [users, setUsers] = useState(false),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.user.loading)

  const onSave = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (!userData) {
      return
    }
    setUserID(userData.id)
  }, [userData])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="UserPermissionsModal" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="UserPermissionsModal">{`Editar permisos a ${userData.name}`}</CModalTitle>
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
              Permisos
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* Permissions per submodule */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              {/* Administration Submodules */}
              <div className="row row-cols-3 mb-3">
                <div className="col">
                  <h5>Bancos</h5>
                  <div>
                    <CFormCheck
                      id={'banks'}
                      label={'Bancos'}
                      checked={banks}
                      onChange={(e) => setBanks(e.target.checked)}
                    />
                    <CFormCheck
                      id={'providers'}
                      label={'Proveedores'}
                      checked={providers}
                      onChange={(e) => setProviders(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="col">
                  <h5>Proveedores</h5>
                  <div>
                    <CFormCheck
                      id={'banks'}
                      label={'Bancos'}
                      checked={banks}
                      onChange={(e) => setBanks(e.target.checked)}
                    />
                    <CFormCheck
                      id={'providers'}
                      label={'Proveedores'}
                      checked={providers}
                      onChange={(e) => setProviders(e.target.checked)}
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

export default UserPermissionsModalForm
