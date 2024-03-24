import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cibDropbox,
  cilPeople,
  cilWallet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import config from './server.config'

const _nav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      // text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Modulos',
  },
  {
    component: CNavGroup,
    name: 'Administración',
    to: '/administracion',
    key: 'administration',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bancos',
        to: '/bancos',
        key: 'banks',
      },
      {
        component: CNavItem,
        name: 'Proveedores',
        to: '/proveedores',
        key: 'providers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pagos',
    to: '/pagos',
    key: 'payments',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Solicitud de compra',
        to: '/compras/solicitudes',
        key: 'quotes',
      },
      {
        component: CNavItem,
        name: 'Solicitud de pago',
        to: '/pagos/solicitudes',
        key: 'purchaseRequest',
      },
      {
        component: CNavItem,
        name: 'Pagos pendientes',
        to: '/pagos/pendientes',
        key: 'pendingPayments',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Usuarios',
    to: '/usuarios',
    key: 'users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Departamentos',
        to: '/departamentos',
        key: 'departments',
      },
      {
        component: CNavItem,
        name: 'Usuarios',
        to: '/usuarios',
        key: 'users',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Manual',
    href: '#',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Dropbox Auth',
    href: `https://www.dropbox.com/oauth2/authorize?client_id=${config.instance.dropbox_client_id}&response_type=code&token_access_type=offline&redirect_uri=${config.instance.return_uri}`,
    icon: <CIcon icon={cibDropbox} customClassName="nav-icon" />,
    key: 'dropbox',
  },
]

export default _nav
