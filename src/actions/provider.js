import axios from 'axios'
import {
  ADD_PROVIDER,
  GET_PROVIDERS,
  PROVIDER_ERROR,
  DELETE_PROVIDER,
  UPDATE_PROVIDER,
} from './types'
import { setToast } from './toast'
import { AppToast } from 'src/components'
import config from '../server.config'

export const getProviders = (page) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/provider?page=${page}`)
    dispatch({
      type: GET_PROVIDERS,
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

export const addProvider = (data) => async (dispatch) => {
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

export const updateProvider = (data, id) => async (dispatch) => {
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

export const deleteProvider = (id) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/provider/${id}`, config.instance.headers)
    dispatch({
      type: DELETE_PROVIDER,
      payload: id,
    })
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
