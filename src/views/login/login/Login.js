import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { logo } from 'src/assets/brand/logo'
import BACKGROUND from '../../../assets/images/background-login.png'
import { login } from 'src/actions/auth'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'

const Login = () => {
  const [email, setEmail] = useState(),
    [password, setPassword] = useState(),
    dispatch = useDispatch(),
    navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(
      login({ email, password }, (loginRes) => {
        if (loginRes.success) {
          localStorage.setItem('token', loginRes.data.access_token)
          dispatch(setToast(AppToast({ msg: loginRes.message, type: 'success' })))
          navigate('/dashboard')
        } else {
          dispatch(setToast(AppToast({ msg: loginRes.message, type: 'error' })))
        }
      }),
    )
  }

  return (
    <div
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Iniciar sesión </h1>
                    <p className="text-medium-emphasis">Inicia sesión con tu cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Correo electrónico"
                        autoComplete="correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseñas "
                        autoComplete="contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary text-white" className="px-4" onClick={onLogin}>
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          ¿Olvidaste tu contraseña?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 d-md-block d-none"
                style={{ width: '44%', opacity: 0.9 }}
              >
                <CCardBody className="text-center">
                  <CIcon icon={logo} height={250} />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
