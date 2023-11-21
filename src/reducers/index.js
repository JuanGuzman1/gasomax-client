import { combineReducers } from 'redux'
import provider from './provider'
import sidebar from './sidebar'
import toast from './toast'
import file from './file'

export default combineReducers({
  provider,
  sidebar,
  toast,
  file,
})
