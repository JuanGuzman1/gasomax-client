import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Administration
const Banks = React.lazy(() => import('./views/administration/banks/Banks'))
const Providers = React.lazy(() => import('./views/administration/providers/Providers'))
//Pagos
const Quotes = React.lazy(() => import('./views/payments/quotes/Quotes'))
const PurchaseRequest = React.lazy(() => import('./views/payments/purchaseRequest/PurchaseRequest'))
const PendingPayments = React.lazy(() => import('./views/payments/pendingPayments/PendingPayments'))
//Usuarios
const Departments = React.lazy(() => import('./views/users/departments/Departments'))
const Users = React.lazy(() => import('./views/users/users/Users'))
const Profile = React.lazy(() => import('./views/users/profile/Profile'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bancos', name: 'Bancos', element: Banks },
  { path: '/proveedores', name: 'Proveedores', element: Providers },
  { path: '/compras/solicitudes', name: 'Solicitudes de compras', element: Quotes },
  { path: '/pagos/solicitudes', name: 'Solicitudes de pago', element: PurchaseRequest },
  { path: '/pagos/pendientes', name: 'Pendientes', element: PendingPayments },
  { path: '/departamentos', name: 'Departamentos', element: Departments },
  { path: '/usuarios', name: 'Usuarios', element: Users },
  { path: '/perfil', name: 'Perfil', element: Profile },
]

export default routes
