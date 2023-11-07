const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, ...rest }) {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
