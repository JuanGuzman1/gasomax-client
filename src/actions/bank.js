import axios from 'axios'
import { ADD_BANK, GET_BANKS, BANK_ERROR, DELETE_BANK, UPDATE_BANK, SELECT_BANKS } from './types'
import config from '../server.config'

export const getBanks = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/bank?${filter}=${value}&page=${page}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_BANKS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addBank = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/bank`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: ADD_BANK,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
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

export const updateBank = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/bank/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: UPDATE_BANK,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
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

export const deleteBank = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/bank/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: DELETE_BANK,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
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

export const selectBanks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/bank`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: SELECT_BANKS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
