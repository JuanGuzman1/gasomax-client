import axios from 'axios'
import { GET_PROVIDERS, PROVIDER_ERROR } from './types'

export const getProviders = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/providers')
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
