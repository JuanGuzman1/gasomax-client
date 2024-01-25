import { combineReducers } from 'redux'
import auth from './auth'
import provider from './provider'
import sidebar from './sidebar'
import toast from './toast'
import file from './file'
import bank from './bank'
import purchaseRequest from './purchaseRequest'
import pendingPayments from './pendingPayments'
import department from './department'
import user from './user'

export default combineReducers({
  auth,
  provider,
  sidebar,
  toast,
  file,
  bank,
  purchaseRequest,
  pendingPayments,
  department,
  user,
})
