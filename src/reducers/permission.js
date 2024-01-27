import { GET_PERMISSIONS, PERMISSION_ERROR } from 'src/actions/types'

const initialState = {
  permissions: {},
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PERMISSIONS:
      return {
        ...state,
        permissions: payload,
        loading: false,
      }
    case PERMISSION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
