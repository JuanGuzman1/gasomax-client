import {
  GET_QUOTES,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
  QUOTE_ERROR,
  GET_QUOTE_OBSERVATIONS,
  ADD_QUOTE_OBSERVATION,
  UPLOAD_QUOTE_FILE_PROGRESS,
  UPLOAD_QUOTE_FILE,
  FILE_QUOTE_ERROR,
  SEND_PAY_QUOTE,
} from 'src/actions/types'

const initialState = {
  quotes: {
    data: [],
    current_page: 1,
  },
  filters: {},
  loading: true,
  error: {},
  loadingObservations: false,
  observations: [],
  progress: 0,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
        loading: false,
      }
    case ADD_QUOTE:
      return {
        ...state,
        quotes: { data: [payload, ...state.quotes.data] },
        loading: false,
      }
    case UPDATE_QUOTE: {
      let index = state.quotes.data.findIndex((q) => q.id === payload.id)
      state.quotes.data[index] = { ...state.quotes.data[index], ...payload }
      return {
        ...state,
        quotes: { data: [...state.quotes.data] },
        loading: false,
      }
    }
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: {
          data: state.quotes.data.filter((q) => q.id !== payload),
        },
        loading: false,
      }
    case GET_QUOTE_OBSERVATIONS:
      return {
        ...state,
        observations: payload,
        loadingObservations: false,
      }
    case ADD_QUOTE_OBSERVATION:
      return {
        ...state,
        observations: [...state.observations, payload],
        loadingObservations: false,
      }
    case UPLOAD_QUOTE_FILE:
      return {
        ...state,
        progress: 0,
      }
    case UPLOAD_QUOTE_FILE_PROGRESS:
      return {
        ...state,
        progress: payload,
      }
    case SEND_PAY_QUOTE: {
      let index = state.quotes.data.findIndex((q) => q.id === payload.quote.id)
      state.quotes.data[index] = { ...state.quotes.data[index], ...payload.quote }
      return {
        ...state,
        quotes: { data: [...state.quotes.data] },
        loading: false,
      }
    }
    case FILE_QUOTE_ERROR:
      return {
        ...state,
        error: payload,
        progress: 0,
      }
    case QUOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
