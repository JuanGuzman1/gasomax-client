import axios from 'axios'
import { ADD_PROVIDER, GET_PROVIDERS, PROVIDER_ERROR } from './types'
import { setToast } from './toast'
import { AppToast } from 'src/components'
import config from '../server.config'

export const getProviders = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/provider`)
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
