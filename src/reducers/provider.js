import {
  ADD_PROVIDER,
  DELETE_PROVIDER,
  GET_PROVIDERS,
  PROVIDER_ERROR,
  UPDATE_PROVIDER,
  EXPORT_PROVIDER_EXCEL,
  SELECT_PROVIDERS,
  SELECT_ACCOUNT_PROVIDERS,
} from 'src/actions/types'

const initialState = {
  providers: {
    data: [],
    current_page: 1,
  },
  filters: {},
  accounts: [],
  loading: true,
  loadingAccounts: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROVIDERS:
      return {
        ...state,
        providers: payload,
        loading: false,
      }
    case ADD_PROVIDER:
      return {
        ...state,
        providers: { data: [payload, ...state.providers.data] },
        loading: false,
      }
    case UPDATE_PROVIDER: {
      let index = state.providers.data.findIndex((provider) => provider.id === payload.id)
      state.providers.data[index] = { ...state.providers.data[index], ...payload }
      return {
        ...state,
        providers: { data: [...state.providers.data] },
        loading: false,
      }
    }
    case DELETE_PROVIDER:
      return {
        ...state,
        providers: { data: state.providers.data.filter((provider) => provider.id !== payload) },
        loading: false,
      }
    case EXPORT_PROVIDER_EXCEL:
      return state
    case SELECT_PROVIDERS:
      return {
        ...state,
        providers: { data: payload },
        loading: false,
      }
    case SELECT_ACCOUNT_PROVIDERS:
      return {
        ...state,
        accounts: { data: payload },
        loadingAccounts: false,
      }
    case PROVIDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
