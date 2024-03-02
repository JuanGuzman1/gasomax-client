import axios from 'axios'
import {
  GET_QUOTES,
  QUOTE_ERROR,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
  ADD_QUOTE_OBSERVATION,
  GET_QUOTE_OBSERVATIONS,
  UPLOAD_QUOTE_FILE_PROGRESS,
  UPLOAD_QUOTE_FILE,
  FILE_QUOTE_ERROR,
  SEND_PAY_QUOTE,
} from './types'
import config from '../server.config'
import { setToast } from './toast'
import { AppToast } from 'src/components/app'

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

export const uploadQuoteFile = (data, cb) => async (dispatch) => {
  try {
    const formData = new FormData()
    formData.append('file', data.file)
    formData.append('tag', data.tag)
    formData.append('description', data.description)
    formData.append('localName', data.file.name)
    formData.append('provider', data.provider)
    formData.append('amount', data.amount)
    formData.append('deliveryDate', data.deliveryDate)
    formData.append('quote_id', data.quote_id)
    const res = await axios.post(`${config.instance.baseURL}/api/quoteFile`, formData, {
      headers: {
        ...config.instance.headersFormData,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        dispatch({
          type: UPLOAD_QUOTE_FILE_PROGRESS,
          payload: percentCompleted,
        })
      },
    })
    dispatch({
      type: UPLOAD_QUOTE_FILE,
      payload: res.data,
    })
    cb(res.data)
    dispatch(setToast(AppToast({ msg: 'Archivo subido correctamente.', title: 'Archivos' })))
  } catch (err) {
    console.log(err)
    dispatch({
      type: FILE_QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al subir archivo.', title: 'Archivos' })),
    )
  }
}

export const downloadQuoteFile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/quoteFileDownload/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(new Blob([res.data]))

    const link = document.createElement('a')
    link.href = url
    // Extrae el nombre del archivo de la cabecera de respuesta o proporciona uno
    const contentDisposition = res.headers['content-disposition']
    const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/)
    const extension = res.data.type.split('/')[1]
    const fileName = fileNameMatch ? fileNameMatch[1] : `archivo_descargado.${extension}`
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()

    // Limpia el enlace y el objeto URL después de la descarga
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    dispatch(setToast(AppToast({ msg: 'Descargando archivo.', title: 'Archivos' })))
  } catch (err) {
    dispatch({
      type: FILE_QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al descargar archivo.', title: 'Archivos' })),
    )
  }
}

export const viewQuoteFile = (id, ext) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/quoteFileDownload/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(
      new Blob([res.data], { type: ext === 'pdf' ? 'application/pdf' : `image/${ext}` }),
    )
    window.open(url)
  } catch (err) {
    dispatch({
      type: FILE_QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al descargar archivo.', title: 'Archivos' })),
    )
  }
}

export const deleteQuoteFile = (id, cb) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/quoteFile/${id}`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    cb()
    dispatch(setToast(AppToast({ msg: 'Archivo eliminado correctamente.', title: 'Archivos' })))
  } catch (err) {
    dispatch({
      type: FILE_QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un al eliminar archivo.', title: 'Archivos' })))
  }
}

export const deleteFilesByQuote = (quote_id) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/${quote_id}/destroy/quoteFiles`, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  } catch (err) {
    dispatch({
      type: FILE_QUOTE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al eliminar archivo.', title: 'Archivos' })),
    )
  }
}

export const sendPay = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.instance.baseURL}/api/send/pay/quote/${id}`, data, {
      headers: {
        ...config.instance.headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    dispatch({
      type: SEND_PAY_QUOTE,
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
