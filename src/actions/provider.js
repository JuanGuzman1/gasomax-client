import axios from 'axios'
import {
  ADD_PROVIDER,
  GET_PROVIDERS,
  PROVIDER_ERROR,
  DELETE_PROVIDER,
  UPDATE_PROVIDER,
  EXPORT_PROVIDER_EXCEL,
} from './types'
import { setToast } from './toast'
import { AppToast } from 'src/components'
import config from '../server.config'

export const getProviders = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/provider?${filter}=${value}&page=${page}`,
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
    const res = await axios.post(
      `${config.instance.baseURL}/api/provider`,
      data,
      config.instance.headers,
    )
    dispatch({
      type: ADD_PROVIDER,
      payload: res.data,
    })
    cb(res.data)
    dispatch(setToast(AppToast({ msg: 'Proveedor agregado correctamente.', title: 'Proveedores' })))
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores' })))
  }
}

export const updateProvider = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${config.instance.baseURL}/api/provider/${id}`,
      data,
      config.instance.headers,
    )
    dispatch({
      type: UPDATE_PROVIDER,
      payload: res.data,
    })
    cb(res.data)
    dispatch(
      setToast(AppToast({ msg: 'Proveedor actualizado correctamente.', title: 'Proveedores' })),
    )
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores' })))
  }
}

export const deleteProvider = (id, cb) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/provider/${id}`, config.instance.headers)
    dispatch({
      type: DELETE_PROVIDER,
      payload: id,
    })
    cb(id)
    dispatch(
      setToast(AppToast({ msg: 'Proveedor eliminado correctamente.', title: 'Proveedores' })),
    )
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores' })))
  }
}

export const exportProviderExcel = (filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/excel/provider/export?${filter}=${value}`,
      {
        headers: config.instance.headers,
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
    dispatch(setToast(AppToast({ msg: 'Descargando archivo.', title: 'Archivos' })))
  } catch (err) {
    dispatch({
      type: PROVIDER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores' })))
  }
}
