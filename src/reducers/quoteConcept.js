import { GET_QUOTE_CHARGES, GET_QUOTE_CONCEPTS, QUOTE_CONCEPT_ERROR } from 'src/actions/types'

const initialState = {
  concepts: {
    data: [],
    current_page: 1,
  },
  charges: [],
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_QUOTE_CHARGES:
      return {
        ...state,
        charges: payload,
        loading: false,
      }

    case GET_QUOTE_CONCEPTS:
      return {
        ...state,
        concepts: { data: payload },
        loading: false,
      }
    case QUOTE_CONCEPT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
