import axios from 'axios'
import { GET_PENDING_PAYMENTS, PENDING_PAYMENTS_ERROR } from './types'
import config from '../server.config'

export const getPendingPayments = (page, filter, value) => async (dispatch) => {
  try {
    const userId = 1
    const res = await axios.get(
      `${config.instance.baseURL}/api/pending/purchaseRequest?user_id=${userId}&${filter}=${value}&page=${page}`,
    )
    dispatch({
      type: GET_PENDING_PAYMENTS,
      payload: { ...res.data, filters: { filter, value } },
    })
  } catch (err) {
    dispatch({
      type: PENDING_PAYMENTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
  }
}
