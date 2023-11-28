import { ADD_BANK, DELETE_BANK, GET_BANKS, BANK_ERROR, UPDATE_BANK } from 'src/actions/types'

const initialState = {
  banks: {
    data: [],
  },
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_BANKS:
      return {
        ...state,
        banks: payload,
        loading: false,
      }
    case ADD_BANK:
      return {
        ...state,
        banks: { data: [payload, ...state.banks.data] },
        loading: false,
      }
    case UPDATE_BANK: {
      let index = state.banks.data.findIndex((bank) => bank.id === payload.id)
      state.banks.data[index] = { ...state.banks.data[index], ...payload }
      return {
        ...state,
        banks: { data: [...state.banks.data] },
        loading: false,
      }
    }
    case DELETE_BANK:
      return {
        ...state,
        banks: { data: state.banks.data.filter((bank) => bank.id !== payload) },
        loading: false,
      }
    case BANK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
