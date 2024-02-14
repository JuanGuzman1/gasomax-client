import axios from 'axios'
import { GET_UNIT_LINES, GET_UNITS, UNIT_ERROR } from './types'
import config from '../server.config'

export const getLines = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/line`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: GET_UNIT_LINES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: UNIT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const getUnitsByLine = (line) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/unit/line?line=${line}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: GET_UNITS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: UNIT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
