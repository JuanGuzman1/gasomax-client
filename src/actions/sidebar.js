export const setSidebar =
  ({ sidebarShow, sidebarUnfoldable }) =>
  (dispatch) => {
    dispatch({
      type: 'set',
      sidebarShow,
      sidebarUnfoldable,
    })
  }
