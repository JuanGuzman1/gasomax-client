import {
  GET_PURCHASE_REQUESTS,
  ADD_PURCHASE_REQUEST,
  UPDATE_PURCHASE_REQUEST,
  DELETE_PURCHASE_REQUEST,
  PURCHASE_REQUEST_ERROR,
  ADD_PURCHASE_REQUEST_OBSERVATION,
  GET_PURCHASE_REQUEST_OBSERVATIONS,
  GET_PP_PURCHASE_REQUEST_PROVIDER,
} from 'src/actions/types'

const initialState = {
  purchaseRequests: {
    data: [],
    current_page: 1,
  },
  filters: {},
  loading: true,
  error: {},
  loadingObservations: false,
  observations: [],
  pendingPayments: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PURCHASE_REQUESTS:
      return {
        ...state,
        purchaseRequests: payload,
        loading: false,
      }
    case ADD_PURCHASE_REQUEST:
      return {
        ...state,
        purchaseRequests: { data: [payload, ...state.purchaseRequests.data] },
        loading: false,
      }
    case UPDATE_PURCHASE_REQUEST: {
      let index = state.purchaseRequests.data.findIndex((pr) => pr.id === payload.id)
      state.purchaseRequests.data[index] = { ...state.purchaseRequests.data[index], ...payload }
      return {
        ...state,
        purchaseRequests: { data: [...state.purchaseRequests.data] },
        loading: false,
      }
    }
    case DELETE_PURCHASE_REQUEST:
      return {
        ...state,
        purchaseRequests: {
          data: state.purchaseRequests.data.filter((pr) => pr.id !== payload),
        },
        loading: false,
      }
    case GET_PURCHASE_REQUEST_OBSERVATIONS:
      return {
        ...state,
        observations: payload,
        loadingObservations: false,
      }
    case ADD_PURCHASE_REQUEST_OBSERVATION:
      return {
        ...state,
        observations: [...state.observations, payload],
        loadingObservations: false,
      }
    case GET_PP_PURCHASE_REQUEST_PROVIDER:
      return {
        ...state,
        pendingPayments: payload,
      }
    case PURCHASE_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
