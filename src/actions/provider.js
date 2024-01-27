import axios from 'axios'
import {
  ADD_PROVIDER,
  GET_PROVIDERS,
  PROVIDER_ERROR,
  DELETE_PROVIDER,
  UPDATE_PROVIDER,
  EXPORT_PROVIDER_EXCEL,
  SELECT_PROVIDERS,
} from './types'
import config from '../server.config'

export const getProviders = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/provider?${filter}=${value}&page=${page}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_PROVIDERS,
      payload: { ...res.data, filters: { filter, value } },
    })
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const addProvider = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/provider`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: ADD_PROVIDER,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
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

export const updateProvider = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`${config.instance.baseURL}/api/provider/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: UPDATE_PROVIDER,
      payload: res.data.data,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
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

export const deleteProvider = (id, cb) => async (dispatch) => {
  try {
    const res = await axios.delete(`${config.instance.baseURL}/api/provider/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: DELETE_PROVIDER,
      payload: id,
    })
    cb(res.data)
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
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

export const exportProviderExcel = (filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/excel/provider/export?${filter}=${value}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        responseType: 'blob',
      },
    )
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url

    link.setAttribute('download', 'Proveedores.xlsx')
    document.body.appendChild(link)
    link.click()

    // Limpia el enlace y el objeto URL después de la descarga
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    dispatch({
      type: EXPORT_PROVIDER_EXCEL,
    })
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const selectProviders = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/provider`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: SELECT_PROVIDERS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
