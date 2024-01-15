import { DateTime } from 'luxon'

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

export const statusPurchaseRequest = {
  pending: 'Cotización completa',
  approved: 'Cotización aprobada',
  paid: 'Cotización pagada',
  rejected: 'Cotización rechazada',
}

export const statusPurchaseRequestColors = {
  pending: 'warning',
  approved: 'success',
  paid: 'info',
  rejected: 'danger',
}
