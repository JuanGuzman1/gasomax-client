import { GET_PROVIDERS, PROVIDER_ERROR } from 'src/actions/types'

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
    default:
      return state
  }
}
