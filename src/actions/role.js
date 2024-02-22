import { SELECT_ROLES, ROLE_ERROR } from './types'
import axios from 'axios'
import config from 'src/server.config'

export const selectRoles = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/role`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: SELECT_ROLES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ROLE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
