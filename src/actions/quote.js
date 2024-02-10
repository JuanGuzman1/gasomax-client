import axios from 'axios'
import {
  GET_QUOTES,
  QUOTE_ERROR,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
  ADD_QUOTE_OBSERVATION,
  GET_QUOTE_OBSERVATIONS,
} from './types'
import config from '../server.config'

export const getQuotes = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/quote?${filter}=${value}&page=${page}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_QUOTES,
      payload: { ...res.data, filters: { filter, value } },
    })
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addQuote = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/quote`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: ADD_QUOTE,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
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

export const updateQuote = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/quote/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: UPDATE_QUOTE,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
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

export const deleteQuote = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/quote/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: DELETE_QUOTE,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
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

export const getQuoteObservations = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/quoteObservation?quote_id=${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: GET_QUOTE_OBSERVATIONS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addQuoteObservation = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/quoteObservation`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: ADD_QUOTE_OBSERVATION,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
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
