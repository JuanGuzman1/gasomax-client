import React, { Component, Suspense } from 'react'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import { CToaster } from '@coreui/react'
import { connect } from 'react-redux'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/login/login/Login'))
const Register = React.lazy(() => import('./views/login/register/Register'))
const Page404 = React.lazy(() => import('./views/login/page404/Page404'))
const Page500 = React.lazy(() => import('./views/login/page500/Page500'))

const mapStateToProps = (state) => ({
  Toast: state.toast.ToastComponent,
  User: state.auth.user,
})

class App extends Component {
  render() {
    let Toast = this.props.Toast
    let User = this.props.User

    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route
              path="/"
              exact
              element={<Navigate to={User ? 'dashboard' : 'login'} replace />}
            />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            {User && <Route path="*" name="Home" element={<DefaultLayout />} />}
            <Route path="/404" name="404" element={<Navigate to={'404'} replace />} />
          </Routes>
          {Toast && <CToaster push={Toast} placement="top-end" />}
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default connect(mapStateToProps)(App)
