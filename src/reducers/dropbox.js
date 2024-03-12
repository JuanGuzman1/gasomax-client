import { DROPBOX_ERROR, GET_AUTHORIZATION_CODE } from '../actions/types'

const initialState = {
  token: {
    token_dropbox: null,
    token_dropbox_expires_in: null,
    token_dropbox_refresh: null,
  },
  progress: 0,
  error: {},
}

/* eslint-disable import/no-anonymous-default-export */
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_AUTHORIZATION_CODE:
      return {
        ...state,
        token: payload,
        progress: 0,
      }
    case DROPBOX_ERROR:
      return {
        ...state,
        error: payload,
        progress: 0,
      }

    default:
      return state
  }
}
