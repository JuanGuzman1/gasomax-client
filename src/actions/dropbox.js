import axios from 'axios'
import config from 'src/server.config'
import { GET_AUTHORIZATION_CODE, DROPBOX_ERROR } from './types'

export const getConfigurationSystem = (cb) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/configuration`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })

    let data = {
      token_dropbox: res.data?.data?.token_dropbox,
      token_dropbox_expires_in: res.data?.data?.token_dropbox_expires_in,
      token_dropbox_refresh: res.data?.data?.token_dropbox_refresh,
    }
    dispatch({
      type: GET_AUTHORIZATION_CODE,
      payload: data,
    })
    cb(res.data)
  } catch (error) {
    console.log(error)
  }
}

export const setDropboxAccessToken = (code) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${config.instance.baseURL}/api/token/dropbox`,
      {
        code,
        redirect_uri: config.instance.return_uri,
      },
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
  } catch (err) {
    dispatch({
      type: DROPBOX_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
