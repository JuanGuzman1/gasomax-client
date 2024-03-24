import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import avatar8 from './../../assets/images/avatars/1.jpg'
import { logout } from 'src/actions/auth'
import { useNavigate } from 'react-router-dom'
import { setToast } from 'src/actions/toast'
import { AppToast } from './'
import { LOGOUT } from 'src/actions/types'

const AppHeaderDropdown = () => {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    { profilePicture } = useSelector((state) => state.auth)

  const onLogout = (e) => {
    e.preventDefault()

    dispatch(
      logout((logoutRes) => {
        if (logoutRes.success) {
          localStorage.removeItem('token')
          localStorage.clear()
          navigate('/login')
          dispatch(setToast(AppToast({ msg: logoutRes.message, type: 'success' })))
          dispatch({
            type: LOGOUT,
            payload: logoutRes.data,
          })
        } else {
          dispatch(setToast(AppToast({ msg: logoutRes.message, type: 'error' })))
        }
      }),
    )
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={profilePicture} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Configuración</CDropdownHeader>
        <CDropdownItem href="/perfil">
          <CIcon icon={cilUser} className="me-2" />
          Perfil
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={onLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Cerrar sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
