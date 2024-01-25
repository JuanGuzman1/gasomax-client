import {
  GET_DEPARTMENTS,
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  SELECT_DEPARTMENTS,
  DEPARTMENT_ERROR,
} from 'src/actions/types'

const initialState = {
  departments: {
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
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: payload,
        loading: false,
      }
    case ADD_DEPARTMENT:
      return {
        ...state,
        departments: { data: [payload, ...state.departments.data] },
        loading: false,
      }
    case UPDATE_DEPARTMENT: {
      let index = state.departments.data.findIndex((department) => department.id === payload.id)
      state.departments.data[index] = { ...state.departments.data[index], ...payload }
      return {
        ...state,
        departments: { data: [...state.departments.data] },
        loading: false,
      }
    }
    case DELETE_DEPARTMENT:
      return {
        ...state,
        departments: {
          data: state.departments.data.filter((department) => department.id !== payload),
        },
        loading: false,
      }
    case SELECT_DEPARTMENTS:
      return {
        ...state,
        departments: { data: payload },
        loading: false,
      }
    case DEPARTMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
