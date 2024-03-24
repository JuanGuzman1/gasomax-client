import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader, AppToast } from '../components/app/index'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/actions/auth'
import { getConfigurationSystem, setDropboxAccessToken } from 'src/actions/dropbox'
import { useSearchParams } from 'react-router-dom'
import { setToast } from 'src/actions/toast'
import { getUrlImage } from 'src/actions/file'
import { PROFILE_PICTURE } from 'src/actions/types'

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
    if (!user.data.user && user.data.user.files.length <= 0) {
      return
    }
    let image = user.data.user.files.find((file) => file.tag === 'img')
    dispatch(
      getUrlImage(image.id, image.extension, (url) => {
        dispatch({
          type: PROFILE_PICTURE,
          payload: url,
        })
      }),
    )
  }, [user, dispatch])

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
