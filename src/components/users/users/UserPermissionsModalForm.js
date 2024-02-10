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
import { assignPermissions } from 'src/actions/user'

const UserPermissionsModalForm = ({ visible, onClose, userData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [selectedPermissions, setSelectedPermissions] = useState([]),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.permission.loading),
    permissions = useSelector((state) => state.permission.permissions)

  const onSave = (e) => {
    e.preventDefault()
    let data = {
      user_id: userID,
      permissions: selectedPermissions,
    }
    dispatch(
      assignPermissions(data, (assignPermissionRes) => {
        if (assignPermissionRes.success) {
          dispatch(setToast(AppToast({ msg: assignPermissionRes.message, type: 'success' })))
        } else {
          dispatch(setToast(AppToast({ msg: assignPermissionRes.message, type: 'error' })))
        }
      }),
    )
    onClose()
  }

  useEffect(() => {
    if (!userData) {
      return
    }

    setUserID(userData.id)
    let permissionsDB = []
    if (userData.permissions) {
      userData.permissions.forEach((p) => {
        onAddPermissions(true, p.permission.id, true)
        permissionsDB.push(p.permission.id)
      })
      setSelectedPermissions(permissionsDB)
    }
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
    <CModal visible={visible} onClose={onClose} aria-labelledby="UserPermissionsModal" size="xl">
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
                <div className="row row-cols-5">
                  {/* banks permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'banks') && (
                    <div className="col mb-3">
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
                  )}
                  {/* providers permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'providers') && (
                    <div className="col mb-3">
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
                  )}
                  {/* quotes permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'quotes') && (
                    <div className="col mb-3">
                      <h5>Solicitudes de compra</h5>
                      {permissions.map((permission) => {
                        if (permission.module.submodule === 'quotes') {
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
                  )}
                  {/* purchaseRequest permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'purchaseRequest') && (
                    <div className="col mb-3">
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
                  )}
                  {/* pendingPayments permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'pendingPayments') && (
                    <div className="col mb-3">
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
                  )}
                  {/* departments permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'departments') && (
                    <div className="col mb-3">
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
                  )}
                  {/* Users permissions */}
                  {userData.modules.find((m) => m.module.submodule === 'users') && (
                    <div className="col mb-3">
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
                  )}
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
