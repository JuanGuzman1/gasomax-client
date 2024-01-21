import { LOGIN, AUTH_ERROR, LOGOUT } from 'src/actions/types'

const initialState = {
  user: null,
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
