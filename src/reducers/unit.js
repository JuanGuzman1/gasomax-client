import { GET_UNITS, GET_UNIT_LINES, UNIT_ERROR } from 'src/actions/types'

const initialState = {
  units: {
    data: [],
    current_page: 1,
  },
  lines: [],
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_UNIT_LINES:
      return {
        ...state,
        lines: payload,
        loading: false,
      }

    case GET_UNITS:
      return {
        ...state,
        units: { data: payload },
        loading: false,
      }
    case UNIT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
