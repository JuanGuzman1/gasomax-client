import axios from 'axios'
import { ADD_BANK, GET_BANKS, BANK_ERROR, DELETE_BANK, UPDATE_BANK, SELECT_BANKS } from './types'
import { setToast } from './toast'
import { AppToast } from 'src/components'
import config from '../server.config'

export const getBanks = (page, filter, value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/bank?${filter}=${value}&page=${page}`,
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
    const res = await axios.post(
      `${config.instance.baseURL}/api/bank`,
      data,
      config.instance.headers,
    )
    dispatch({
      type: ADD_BANK,
      payload: res.data,
    })
    cb(res.data)
    dispatch(setToast(AppToast({ msg: 'Banco agregado correctamente.', title: 'Bancos' })))
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Bancos' })))
  }
}

export const updateBank = (data, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${config.instance.baseURL}/api/bank/${id}`,
      data,
      config.instance.headers,
    )
    dispatch({
      type: UPDATE_BANK,
      payload: res.data,
    })
    cb(res.data)
    dispatch(setToast(AppToast({ msg: 'Banco actualizado correctamente.', title: 'Bancos' })))
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Proveedores' })))
  }
}

export const deleteBank = (id, cb) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/bank/${id}`, config.instance.headers)
    dispatch({
      type: DELETE_BANK,
      payload: id,
    })
    cb(id)
    dispatch(setToast(AppToast({ msg: 'Banco eliminado correctamente.', title: 'Banco' })))
  } catch (err) {
    dispatch({
      type: BANK_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(setToast(AppToast({ msg: 'Ha ocurrido un error.', title: 'Banco' })))
  }
}

export const selectBanks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/select/bank`)
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
