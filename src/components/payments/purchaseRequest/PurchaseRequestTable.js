import React, { useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { fileTags } from 'src/utils/fileTags'
import { deleteFilesByModel, downloadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'
import PurchaseRequestModalForm from './PurchaseRequestModalForm'
import PurchaseRequestModalObs from './PurchaseRequestModalObs'
import {
  formatNumber,
  formatTimezoneToDate,
  statusPurchaseRequest,
  statusPurchaseRequestColors,
  useHasPermission,
} from 'src/utils/functions'
import { deletePurchaseRequest, getPurchaseRequestPDF } from 'src/actions/purchaseRequest'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'

const PurchaseRequestTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [visibleObs, setVisibleObs] = useState(false),
    [purchaseData, setPurchaseData] = useState(null),
    [viewModalMode, setViewModalMode] = useState(false),
    dispatch = useDispatch(),
    hasDeletePermission = useHasPermission('purchaseRequest', 'delete'),
    hasEditPermission = useHasPermission('purchaseRequest', 'edit'),
    hasShowPermission = useHasPermission('purchaseRequest', 'show')

  const onDelete = (id) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar.',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deletePurchaseRequest(id, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Solicitud eliminada correctamente.',
                    title: 'Solicitudes de pago',
                    type: 'success',
                  }),
                ),
              )
              dispatch(deleteFilesByModel(id, modelTypes.purchaseRequest))
            } else {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Ha ocurrido un error.',
                    title: 'Solicitudes de pago',
                    type: 'error',
                  }),
                ),
              )
            }
          }),
        )
        Swal.fire({
          title: 'Eliminado!',
          text: 'La solicitud ha sido eliminada.',
          icon: 'success',
        })
      }
    })
  }

  return (
    <>
      <CTable striped responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Folio</CTableHeaderCell>
            <CTableHeaderCell scope="col">Solicitante</CTableHeaderCell>
            <CTableHeaderCell scope="col">Proveedor</CTableHeaderCell>
            <CTableHeaderCell scope="col">Importe</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((pr) => (
            <CTableRow key={pr.id}>
              <CTableHeaderCell scope="row">{pr.id}</CTableHeaderCell>
              <CTableDataCell>{pr.petitioner.name}</CTableDataCell>
              <CTableDataCell>{pr.provider.name}</CTableDataCell>
              <CTableDataCell>
                ${formatNumber(pr.details.reduce((a, d) => a + parseFloat(d.paymentAmount), 0))}
              </CTableDataCell>
              <CTableDataCell>{formatTimezoneToDate(pr.created_at)}</CTableDataCell>
              <CTableDataCell>
                <CBadge color={statusPurchaseRequestColors[pr.status]}>
                  {statusPurchaseRequest[pr.status]}
                </CBadge>
                {!pr.files.find((file) => file.tag === 'receipt') && pr.status === 'paid' && (
                  <CBadge color={statusPurchaseRequestColors['pending']}>
                    Falta comprobante de pago
                  </CBadge>
                )}
              </CTableDataCell>
              <CTableDataCell className="text-center overflow-visible">
                <CDropdown variant="dropdown">
                  <CDropdownToggle href="#" color="light">
                    <CIcon icon={cilOptions} title="Opciones" size="lg" />
                  </CDropdownToggle>
                  <CDropdownMenu className="position-fixed">
                    {hasShowPermission && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setPurchaseData(pr)
                          setViewModalMode(true)
                          setVisible(!visible)
                        }}
                      >
                        Ver solicitud
                      </CDropdownItem>
                    )}
                    {hasEditPermission && pr.status !== 'approved' && pr.status !== 'paid' && (
                      <CDropdownItem
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setPurchaseData(pr)
                          setVisible(!visible)
                        }}
                      >
                        Editar
                      </CDropdownItem>
                    )}
                    {hasDeletePermission && pr.status !== 'approved' && pr.status !== 'paid' && (
                      <CDropdownItem style={{ cursor: 'pointer' }} onClick={() => onDelete(pr.id)}>
                        Eliminar
                      </CDropdownItem>
                    )}
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setPurchaseData(pr)
                        setVisibleObs(!visibleObs)
                      }}
                    >
                      Ver observaciones
                    </CDropdownItem>
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(getPurchaseRequestPDF(pr.id))
                      }}
                    >
                      Imprimir
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {visible && (
        <PurchaseRequestModalForm
          visible={visible}
          onClose={() => {
            setVisible(false)
            setViewModalMode(false)
          }}
          purchaseData={purchaseData}
          view={viewModalMode}
        />
      )}
      {visibleObs && (
        <PurchaseRequestModalObs
          purchaseRequestID={purchaseData?.id}
          visible={visibleObs}
          onClose={() => setVisibleObs(false)}
        />
      )}
    </>
  )
}

export default PurchaseRequestTable
