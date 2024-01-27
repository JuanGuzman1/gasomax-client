import { GET_PERMISSIONS, PERMISSION_ERROR } from './types'
import axios from 'axios'
import config from 'src/server.config'

export const getPermissions = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/permission`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: GET_PERMISSIONS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PERMISSION_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
