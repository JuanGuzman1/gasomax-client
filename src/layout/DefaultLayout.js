import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader, AppToast } from '../components/app/index'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/actions/auth'
import { getConfigurationSystem, setDropboxAccessToken } from 'src/actions/dropbox'
import { useSearchParams } from 'react-router-dom'
import { setToast } from 'src/actions/toast'

const DefaultLayout = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const permissions = useSelector((state) => state.auth.permissions)
  const [params] = useSearchParams(),
    codeURI = params.get('code'),
    { token_dropbox } = useSelector((state) => state.dropbox.token)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getConfigurationSystem((configRes) => {
        if (!configRes.data) {
          dispatch(setToast(AppToast({ msg: 'Sin token para dropbox', type: 'error' })))
        }
      }),
    )
  }, [dispatch])

  useEffect(() => {
    if (!codeURI) {
      return
    }

    dispatch(setDropboxAccessToken(codeURI))
  }, [dispatch, codeURI, token_dropbox])

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
