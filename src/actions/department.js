import axios from 'axios'
import {
  GET_DEPARTMENTS,
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  SELECT_DEPARTMENTS,
  DEPARTMENT_ERROR,
} from './types'
import config from 'src/server.config'

export const getDepartments = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/department?${filter}=${value}&page=${page}`,
      {
        headers: config.instance.headers,
      },
    )
    dispatch({
      type: GET_DEPARTMENTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: DEPARTMENT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addDepartment = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/department`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: ADD_DEPARTMENT,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: DEPARTMENT_ERROR,
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

export const updateDepartment = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/department/${id}`, data, {
      headers: config.instance.headers,
    })
    dispatch({
      type: UPDATE_DEPARTMENT,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: DEPARTMENT_ERROR,
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

export const deleteDepartment = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/department/${id}`, {
      headers: config.instance.headers,
    })
    dispatch({
      type: DELETE_DEPARTMENT,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: DEPARTMENT_ERROR,
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

export const selectDepartments = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/department`, {
      headers: config.instance.headers,
    })
    dispatch({
      type: SELECT_DEPARTMENTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: DEPARTMENT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
