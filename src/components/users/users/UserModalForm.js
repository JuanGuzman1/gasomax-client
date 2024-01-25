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
  CFormSelect,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { addUser, updateUser } from 'src/actions/user'
import CIcon from '@coreui/icons-react'
import { cilX, cilCheckAlt } from '@coreui/icons'

const UserModalForm = ({ visible, onClose, userData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [user, setUser] = useState(''),
    [email, setEmail] = useState(''),
    [departmentID, setDepartmentID] = useState(''),
    [role, setRole] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [nss, setNss] = useState(''),
    [payrollNumber, setPayrollNumber] = useState(''),
    [passwordPolicy, setPasswordPolicy] = useState({
      numCharacters: false,
      uppercaseLetter: false,
      lowercaseLetter: false,
      number: false,
      symbol: false,
    }),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.user.loading)

  const onSave = (e) => {
    e.preventDefault()
    if (!user) {
      alert('Ingrese un nombre')
      return
    }
    if (!email) {
      alert('Ingrese un correo electrónico')
      return
    }

    var arrayPasswordPolicies = Object.values(passwordPolicy)

    if (arrayPasswordPolicies.every((policy) => !policy)) {
      alert('Verifique las políticas de contraseña segura')
      return
    }

    if (!confirmPassword) {
      alert('Confirme la contraseña')
      return
    }

    let data = {
      name: user,
      email,
      password,
      nss,
      role,
      payrollNumber,
    }
    dispatch(
      userData
        ? updateUser(data, userID, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Usuario actualizado correctamente.',
                    title: 'Usuarios',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Usuarios', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          })
        : addUser(data, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Usuario agregado correctamente.',
                    title: 'Usuarios',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Usuarios', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          }),
    )
  }

  const cleanInputs = useCallback(() => {
    setUser('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setRole('')
    setNss('')
    setPayrollNumber('')
    setDepartmentID('')
    setUserID('')
    setActiveKey(1)
  }, [])

  useEffect(() => {
    if (!userData) {
      return
    }
    setUserID(userData.id)
    setUser(userData.name)
    setEmail(userData.email)
    setRole(userData.role)
    setPayrollNumber(userData.payrollNumber)
    setNss(userData.nss)
  }, [userData])

  useEffect(() => {
    if (!password) {
      setPasswordPolicy({
        numCharacters: false,
        uppercaseLetter: false,
        lowercaseLetter: false,
        number: false,
        symbol: false,
      })
      return
    }

    const passData = {
      numCharacters: password.length > 8,
      lowercaseLetter: !!/[a-z]/.test(password),
      uppercaseLetter: !!/[A-Z]/.test(password),
      number: !!/\d/.test(password),
      // eslint-disable-next-line no-useless-escape
      symbol: !!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
    }

    setPasswordPolicy(passData)
  }, [password])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="LiveDemoExampleLabel">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="LiveDemoExampleLabel">
          {userData ? `Editar ${userData.name}` : 'Agregar nuevo'}
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
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 2}
              component="button"
              role="tab"
              aria-controls="data-tab-pane"
              aria-selected={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Contraseña
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* user data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="name">Nombre completo</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
                <CFormInput
                  type="text"
                  id="email"
                  placeholder="Correo electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="nss">Número de seguro social (NSS)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="nss"
                    placeholder="NSS"
                    onChange={(e) => setNss(e.target.value)}
                    value={nss}
                  />
                </div>
                <div className="flex-fill me-2">
                  <CFormLabel htmlFor="payrollNumber">Número de nómina</CFormLabel>
                  <CFormInput
                    type="text"
                    id="payrollNumber"
                    placeholder="No. Nómina"
                    onChange={(e) => setPayrollNumber(e.target.value)}
                    value={payrollNumber}
                  />
                </div>
              </div>
              <div className="mb-3 d-flex">
                <div className="flex-fill me-2">
                  <CFormLabel>Departamento</CFormLabel>
                  <CFormSelect
                    aria-label="charge"
                    options={[
                      { label: 'Seleccione...', value: '' },
                      { label: 'Direccion', value: 'Direccion' },
                      {
                        label: 'Sistemas',
                        value: 'Sistemas',
                      },
                    ]}
                    onChange={(e) => setDepartmentID(e.target.value)}
                    value={departmentID}
                  />
                </div>
                <div className="flex-fill me-2">
                  <CFormLabel>Rol</CFormLabel>
                  <CFormSelect
                    aria-label="role"
                    options={[
                      { label: 'Seleccione...', value: '' },
                      {
                        label: 'Director',
                        value: 'Director',
                      },
                      { label: 'Jefe Dpto', value: 'Jefe Dpto' },
                      { label: 'Colaborador', value: 'Colaborador' },
                    ]}
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                  />
                </div>
              </div>
            </CForm>
          </CTabPane>
          {/* password data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 2}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="name">Contraseña</CFormLabel>
                <CFormInput
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="confirmPassword">Confirmar contraseña</CFormLabel>
                <CFormInput
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-danger">*La contraseña no coincide</p>
                )}
              </div>
              <div className="mb-3">
                <h6 className="fw-bolder">La contraseña debe contener: </h6>
                <div className="d-flex align-items-center">
                  {passwordPolicy.numCharacters ? (
                    <CIcon icon={cilCheckAlt} className="text-success" />
                  ) : (
                    <CIcon icon={cilX} className="text-danger" />
                  )}
                  8 o mas digitos
                </div>
                <div className="d-flex align-items-center">
                  {passwordPolicy.uppercaseLetter ? (
                    <CIcon icon={cilCheckAlt} className="text-success" />
                  ) : (
                    <CIcon icon={cilX} className="text-danger" />
                  )}
                  Una letra mayuscula
                </div>
                <div className="d-flex align-items-center">
                  {passwordPolicy.lowercaseLetter ? (
                    <CIcon icon={cilCheckAlt} className="text-success" />
                  ) : (
                    <CIcon icon={cilX} className="text-danger" />
                  )}
                  Una letra minuscula
                </div>
                <div className="d-flex align-items-center">
                  {passwordPolicy.number ? (
                    <CIcon icon={cilCheckAlt} className="text-success" />
                  ) : (
                    <CIcon icon={cilX} className="text-danger" />
                  )}
                  Un numero
                </div>
                <div className="d-flex align-items-center">
                  {passwordPolicy.symbol ? (
                    <CIcon icon={cilCheckAlt} className="text-success" />
                  ) : (
                    <CIcon icon={cilX} className="text-danger" />
                  )}
                  Un simbolo
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

export default UserModalForm
