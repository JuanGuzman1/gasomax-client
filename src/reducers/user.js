import {
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  ASSIGN_MODULE_USER,
  USER_ERROR,
} from 'src/actions/types'

const initialState = {
  users: {
    data: [],
    current_page: 1,
  },
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      }
    case ADD_USER:
      return {
        ...state,
        users: { data: [payload, ...state.users.data] },
        loading: false,
      }
    case UPDATE_USER: {
      let index = state.users.data.findIndex((user) => user.id === payload.id)
      state.users.data[index] = { ...state.users.data[index], ...payload }
      return {
        ...state,
        users: { data: [...state.users.data] },
        loading: false,
      }
    }
    case ASSIGN_MODULE_USER: {
      let index = state.users.data.findIndex((user) => user.id === payload.id)
      state.users.data[index] = { ...state.users.data[index], ...payload }
      return {
        ...state,
        users: { data: [...state.users.data] },
        loading: false,
      }
    }
    case DELETE_USER:
      return {
        ...state,
        users: { data: state.users.data.filter((user) => user.id !== payload) },
        loading: false,
      }
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
