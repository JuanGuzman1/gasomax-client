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
  CSpinner,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { getPermissions } from 'src/actions/permission'
import { permissions as permissionsLabel } from 'src/utils/functions'

const UserPermissionsModalForm = ({ visible, onClose, userData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [banks, setBanks] = useState(false),
    [selectedPermissions, setSelectedPermissions] = useState([]),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.permission.loading),
    permissions = useSelector((state) => state.permission.permissions)

  const onSave = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (!userData) {
      return
    }
    setUserID(userData.id)
  }, [userData])

  useEffect(() => {
    dispatch(getPermissions())
  }, [dispatch])

  const onAddPermissions = (checked, permissionID, fromDB = false) => {
    if (!fromDB) {
      if (checked) {
        setSelectedPermissions([...selectedPermissions, permissionID])
      } else {
        setSelectedPermissions(selectedPermissions.filter((m) => m !== permissionID))
      }
    }
  }

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
          {loading ? (
            <CSpinner color="primary" variant="grow" />
          ) : (
            <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
              <CForm className="mt-3">
                {/* Administration Submodules */}
                <div className="row row-cols-3 mb-3">
                  {/* banks permissions */}
                  <div className="col">
                    <h5>Bancos</h5>
                    {permissions?.map((permission) => {
                      if (permission.module.submodule === 'banks') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                  {/* providers permissions */}
                  <div className="col">
                    <h5>Proveedores</h5>
                    {permissions.map((permission) => {
                      if (permission.module.submodule === 'providers') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                  {/* purchaseRequest permissions */}
                  <div className="col">
                    <h5>Solicitudes de pago</h5>
                    {permissions.map((permission) => {
                      if (permission.module.submodule === 'purchaseRequest') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                  {/* pendingPayments permissions */}
                  <div className="col">
                    <h5>Pagos pendientes</h5>
                    {permissions.map((permission) => {
                      if (permission.module.submodule === 'pendingPayments') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                  {/* departments permissions */}
                  <div className="col">
                    <h5>Departamentos</h5>
                    {permissions.map((permission) => {
                      if (permission.module.submodule === 'departments') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                  {/* Users permissions */}
                  <div className="col">
                    <h5>Usuarios</h5>
                    {permissions.map((permission) => {
                      if (permission.module.submodule === 'users') {
                        return (
                          <div key={permission.id}>
                            <CFormCheck
                              id={permission.name}
                              label={permissionsLabel[permission.name]}
                              checked={selectedPermissions.find((p) => p === permission.id)}
                              onChange={(e) => onAddPermissions(e.target.checked, permission.id)}
                            />
                          </div>
                        )
                      }
                      return <></>
                    })}
                  </div>
                </div>
              </CForm>
            </CTabPane>
          )}
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
