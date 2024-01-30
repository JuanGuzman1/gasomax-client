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

export const permissions = {
  index: 'Lectura',
  create: 'Crear',
  edit: 'Editar',
  delete: 'Eliminar',
  reject: 'Rechazar',
  pay: 'Pagar',
  authorize: 'Autorizar',
  modules: 'Asignar modulos',
  permissions: 'Asignar permisos',
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
