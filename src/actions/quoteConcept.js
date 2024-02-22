import axios from 'axios'
import { GET_QUOTE_CONCEPTS, QUOTE_CONCEPT_ERROR, GET_QUOTE_CHARGES } from './types'
import config from '../server.config'

export const getCharges = (departmentID) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/select/charge?department_id=${departmentID}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_QUOTE_CHARGES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: QUOTE_CONCEPT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}

export const getConceptsByCharge = (charge) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.instance.baseURL}/api/select/concept/charge?charge=${charge}`,
      {
        headers: {
          ...config.instance.headers,
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    dispatch({
      type: GET_QUOTE_CONCEPTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: QUOTE_CONCEPT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
