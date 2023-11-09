import { combineReducers } from 'redux'
import provider from './provider'
import sidebar from './sidebar'
import toast from './toast'

export default combineReducers({
  provider,
  sidebar,
  toast,
})
