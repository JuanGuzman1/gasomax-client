import {
  DELETE_FILE,
  DOWNLOAD_FILE,
  FILE_ERROR,
  UPLOAD_FILE,
  UPLOAD_FILE_PROGRESS,
} from '../actions/types'

const initialState = {
  file: {},
  progress: 0,
  error: {},
}

/* eslint-disable import/no-anonymous-default-export */
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPLOAD_FILE:
      return {
        ...state,
        file: payload,
        progress: 0,
      }
    case UPLOAD_FILE_PROGRESS:
      return {
        ...state,
        progress: payload,
      }
    case DOWNLOAD_FILE:
      return state
    case DELETE_FILE:
      return {
        ...state,
        file: payload,
      }
    case FILE_ERROR:
      return {
        ...state,
        error: payload,
        progress: 0,
      }

    default:
      return state
  }
}
