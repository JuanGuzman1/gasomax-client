import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/app/index'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/actions/auth'

const DefaultLayout = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const permissions = useSelector((state) => state.auth.permissions)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
