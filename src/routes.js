import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Administration
const Banks = React.lazy(() => import('./views/administration/banks/Banks'))
const Providers = React.lazy(() => import('./views/administration/providers/Providers'))
//Pagos
const PurchaseRequest = React.lazy(() => import('./views/payments/purchaseRequest/PurchaseRequest'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bancos', name: 'Bancos', element: Banks },
  { path: '/proveedores', name: 'Proveedores', element: Providers },
  { path: '/solicitudes', name: 'Solicitudes', element: PurchaseRequest },
]

export default routes
