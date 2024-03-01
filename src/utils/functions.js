import { DateTime } from 'luxon'
import { useSelector } from 'react-redux'

export const formatNumber = (value) => {
  let val = (value / 1).toFixed(2)
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatTimezoneToDate = (date) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT)
}

export const formatTimezoneToDateTime = (date) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_SHORT)
}

export const movementTypes = {
  advance: 'Anticipo',
  settlement: 'Liquidación',
  payment: 'Abono a cuenta',
}
//////////////////////////// status QUOTE ////////////////////
export const statusQuote = (status, uploadQuotePermission = false, petitioner_id) => {
  let statusQuoteLetter = {
    inprogress: uploadQuotePermission ? 'Cotizaciónes enviadas' : 'Cotizaciónes disponibles',
    approved: 'Cotización aprobada',
    authorized: 'Cotización autorizada',
    ok: 'Cotización VoBo',
    sent: uploadQuotePermission ? 'Solicitud nueva' : 'Solicitud enviada',
    sentPay: 'Enviada a pago',
    paid: 'Pagado',
    rejected: 'Cotizaciónes rechazadas',
  }
  return statusQuoteLetter[status]
}

export const statusQuoteColors = {
  inprogress: '#00FFFF',
  approved: '#00FF00',
  authorized: '#0000FF',
  ok: '#008000',
  sent: '#FFA500',
  sentPay: '#FFFF00',
  paid: '#800080',
  rejected: '#FF0000',
}
////////////////////// status purchaseRequest (Update payments) //////////////
export const statusPurchaseRequest = {
  pending: 'Pendiente de aprobación',
  approved: 'Solicitud aprobada',
  paid: 'Pagado',
  rejected: 'Solicitud rechazada',
}

export const statusPurchaseRequestColors = {
  pending: '#FFA500',
  approved: '#00FF00',
  paid: '#800080',
  rejected: '#FF0000',
}

export const permissions = {
  index: 'Listar',
  show: 'Ver',
  create: 'Crear',
  edit: 'Editar',
  delete: 'Eliminar',
  reject: 'Rechazar',
  pay: 'Pagar',
  approve: 'Aprobar',
  authorize: 'Autorizar',
  'authorize.minor.1000': 'Autorizar < $1,000',
  'authorize.mayor.1000': 'Autorizar > $1,000',
  'authorize.minor.5000': 'Autorizar < $5,000',
  'authorize.mayor.5000': 'Autorizar > $5,000',
  modules: 'Asignar modulos',
  permissions: 'Asignar permisos',
  'upload.quote': 'Subir cotizaciónes',
}

export const useHasPermission = (submodule, permission) => {
  const userPermissions = useSelector((state) => state.auth.permissions)
  const userModules = useSelector((state) => state.auth.modules)

  const hasSubmodule = userModules.find((m) => m.submodule === submodule)

  if (hasSubmodule) {
    return userPermissions.find(
      (p) => p.submodule === hasSubmodule.submodule && p.permission === permission,
    )
      ? true
      : false
  }

  return false
}
