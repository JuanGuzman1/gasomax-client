const initialState = {
  ToastComponent: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'set':
      return { ...state, ToastComponent: payload }
    default:
      return state
  }
}
