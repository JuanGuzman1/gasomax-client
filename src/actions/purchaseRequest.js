import axios from 'axios'
import {
  GET_PURCHASE_REQUESTS,
  PURCHASE_REQUEST_ERROR,
  ADD_PURCHASE_REQUEST,
  UPDATE_PURCHASE_REQUEST,
  DELETE_PURCHASE_REQUEST,
  ADD_PURCHASE_REQUEST_OBSERVATION,
  GET_PURCHASE_REQUEST_OBSERVATIONS,
  GET_PP_PURCHASE_REQUEST,
} from './types'
import config from '../server.config'

export const getPurchaseRequests = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/purchaseRequest?${filter}=${value}&page=${page}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_PURCHASE_REQUESTS,
      payload: { ...res.data, filters: { filter, value } },
    })
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addPurchaseRequest = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/purchaseRequest`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: ADD_PURCHASE_REQUEST,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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

export const updatePurchaseRequest = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/purchaseRequest/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: UPDATE_PURCHASE_REQUEST,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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

export const deletePurchaseRequest = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/purchaseRequest/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: DELETE_PURCHASE_REQUEST,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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

export const getPurchaseRequestObservations = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/purchaseRequestObservation?purchase_request_id=${id}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_PURCHASE_REQUEST_OBSERVATIONS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addPurchaseRequestObservation = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${config.instance.baseURL}/api/purchaseRequestObservation`,
      data,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: ADD_PURCHASE_REQUEST_OBSERVATION,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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

export const getPurchaseRequestPDF = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/pdf/purchaseRequest/export/${id}`, {
      headers: {
        ...config.instance.headersFormData,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(res.data)
    window.open(url, '_blank')
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const getPendingPayments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/pending/details/purchaseRequest?user_id=${id}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_PP_PURCHASE_REQUEST,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const rejectPurchaseRequest = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${config.instance.baseURL}/api/reject/purchaseRequest/${id}`,
      data,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: UPDATE_PURCHASE_REQUEST,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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

export const payPurchaseRequest = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/pay/purchaseRequest/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: UPDATE_PURCHASE_REQUEST,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PURCHASE_REQUEST_ERROR,
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
