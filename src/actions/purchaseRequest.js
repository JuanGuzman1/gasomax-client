import axios from 'axios'
import {
  GET_PURCHASE_REQUESTS,
  PURCHASE_REQUEST_ERROR,
  ADD_PURCHASE_REQUEST,
  UPDATE_PURCHASE_REQUEST,
  DELETE_PURCHASE_REQUEST,
} from './types'
import config from '../server.config'

export const getPurchaseRequests = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/purchaseRequest?${filter}=${value}&page=${page}`,
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
    const res = await axios.post(
      `${config.instance.baseURL}/api/purchaseRequest`,
      data,
      config.instance.headers,
    )
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
    const res = await axios.put(
      `${config.instance.baseURL}/api/purchaseRequest/${id}`,
      data,
      config.instance.headers,
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

export const deletePurchaseRequest = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${config.instance.baseURL}/api/purchaseRequest/${id}`,
      config.instance.headers,
    )
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
