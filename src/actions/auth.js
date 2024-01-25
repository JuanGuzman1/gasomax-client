import axios from 'axios'
import { LOGIN, AUTH_ERROR, GET_USER } from './types'
import config from 'src/server.config'

export const login = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/login`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: LOGIN,
      payload: res.data,
    })
    cb(res.data)
  } catch (err) {
    console.log(err)
    dispatch({
      type: AUTH_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    cb({
      success: false,
      message: err.response.data.message,
    })
  }
}

export const logout = (cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/logout`, null, {
      headers: config.instance.headers,
    })

    cb(res.data)
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    cb({
      success: false,
      message: err.message,
    })
  }
}

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/auth/user`, {
      headers: config.instance.headers,
    })
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
