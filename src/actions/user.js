import axios from 'axios'
import {
  GET_USERS,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  ASSIGN_MODULE_USER,
  USER_ERROR,
} from './types'
import config from 'src/server.config'

export const getUsers = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/user?${filter}=${value}&page=${page}`,
      {
        headers: config.instance.headers,
      },
    )
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addUser = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/user`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: ADD_USER,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: USER_ERROR,
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

export const updateUser = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/user/${id}`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: UPDATE_USER,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: USER_ERROR,
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

export const deleteUser = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/user/${id}`, {
      headers: config.instance.headers,
    })
    dispatch({
      type: DELETE_USER,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: USER_ERROR,
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

export const assignModules = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/assign/module`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: ASSIGN_MODULE_USER,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: USER_ERROR,
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
