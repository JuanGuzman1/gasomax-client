import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Administration
const Banks = React.lazy(() => import('./views/banks/Banks'))
const Providers = React.lazy(() => import('./views/providers/Providers'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bancos', name: 'Bancos', element: Banks },
  { path: '/proveedores', name: 'Proveedores', element: Providers },
]

export default routes
