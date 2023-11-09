export const setToast = (ToastComponent) => (dispatch) => {
  dispatch({
    type: 'set',
    payload: ToastComponent,
  })
}
