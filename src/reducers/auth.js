import { LOGIN, AUTH_ERROR, LOGOUT, GET_USER } from 'src/actions/types'

const initialState = {
  user: null,
  loading: true,
  error: {},
  modules: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        modules: payload?.data?.user?.modules?.map((m) => ({
          module: m.module.module,
          submodule: m.module.submodule,
        })),
        loading: false,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }
    case GET_USER:
      return {
        ...state,
        user: { data: { user: payload } },
        modules: payload.modules?.map((m) => ({
          module: m.module.module,
          submodule: m.module.submodule,
        })),
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
