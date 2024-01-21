import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Administration
const Departments = React.lazy(() => import('./views/administration/departments/Departments'))
const Banks = React.lazy(() => import('./views/administration/banks/Banks'))
const Providers = React.lazy(() => import('./views/administration/providers/Providers'))
//Pagos
const PurchaseRequest = React.lazy(() => import('./views/payments/purchaseRequest/PurchaseRequest'))
const PendingPayments = React.lazy(() => import('./views/payments/pendingPayments/PendingPayments'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/departamentos', name: 'Departamentos', element: Departments },
  { path: '/bancos', name: 'Bancos', element: Banks },
  { path: '/proveedores', name: 'Proveedores', element: Providers },
  { path: '/pagos/solicitudes', name: 'Solicitudes', element: PurchaseRequest },
  { path: '/pagos/pendientes', name: 'Pendientes', element: PendingPayments },
]

export default routes
