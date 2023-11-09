import { ADD_PROVIDER, DELETE_PROVIDER, GET_PROVIDERS, PROVIDER_ERROR } from 'src/actions/types'

const initialState = {
  providers: [],
  loading: true,
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
        providers: [payload, ...state.providers],
        loading: false,
      }
    case DELETE_PROVIDER:
      return {
        ...state,
        providers: state.providers.filter((provider) => provider.id !== payload),
        loading: false,
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
