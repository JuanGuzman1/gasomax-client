import { combineReducers } from 'redux'
import provider from './provider'
import sidebar from './sidebar'
import toast from './toast'
import file from './file'
import bank from './bank'
import purchaseRequest from './purchaseRequest'

export default combineReducers({
  provider,
  sidebar,
  toast,
  file,
  bank,
  purchaseRequest,
})
