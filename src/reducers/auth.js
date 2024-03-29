import { LOGIN, AUTH_ERROR, LOGOUT, GET_USER, PROFILE_PICTURE } from 'src/actions/types'

const initialState = {
  user: null,
  loading: true,
  error: {},
  modules: [],
  permissions: [],
  profilePicture: null,
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
        permissions: payload?.data?.user?.permissions?.map((p) => ({
          submodule: p.permission.module.module.submodule,
          permission: p.permission.name,
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
        permissions: payload.permissions?.map((p) => ({
          submodule: p.permission.module.submodule,
          permission: p.permission.name,
        })),
        loading: false,
      }
    case PROFILE_PICTURE:
      return {
        ...state,
        loading: false,
        profilePicture: payload,
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
