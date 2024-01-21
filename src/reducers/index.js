import { combineReducers } from 'redux'
import auth from './auth'
import department from './department'
import provider from './provider'
import sidebar from './sidebar'
import toast from './toast'
import file from './file'
import bank from './bank'
import purchaseRequest from './purchaseRequest'
import pendingPayments from './pendingPayments'

export default combineReducers({
  auth,
  department,
  provider,
  sidebar,
  toast,
  file,
  bank,
  purchaseRequest,
  pendingPayments,
})
