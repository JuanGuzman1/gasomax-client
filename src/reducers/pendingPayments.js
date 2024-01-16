import {
  GET_PENDING_PAYMENTS,
  GET_BALANCE_PAYMENTS,
  PENDING_PAYMENTS_ERROR,
} from 'src/actions/types'

const initialState = {
  pendingPayments: {
    data: [],
    current_page: 1,
  },
  filters: {},
  loading: true,
  error: {},
  balance: [],
  loadingBalance: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PENDING_PAYMENTS:
      return {
        ...state,
        pendingPayments: payload,
        loading: false,
      }
    case GET_BALANCE_PAYMENTS:
      return {
        ...state,
        balance: payload,
        loadingBalance: false,
      }
    case PENDING_PAYMENTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
