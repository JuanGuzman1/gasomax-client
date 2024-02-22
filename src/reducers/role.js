import { SELECT_ROLES, ROLE_ERROR } from 'src/actions/types'

const initialState = {
  roles: {
    data: [],
  },
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SELECT_ROLES:
      return {
        ...state,
        roles: { data: payload },
        loading: false,
      }
    case ROLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
