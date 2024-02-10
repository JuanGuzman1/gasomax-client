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
import QuoteModalForm from './QuoteModalForm'
import QuoteModalObs from './QuoteModalObs'

const QuoteTable = ({ data }) => {
  const [visible, setVisible] = useState(false),
    [visibleObs, setVisibleObs] = useState(false),
    [quoteData, setQuoteData] = useState(null),
    [viewModalMode, setViewModalMode] = useState(false),
    dispatch = useDispatch(),
    hasDeletePermission = useHasPermission('quote', 'delete'),
    hasEditPermission = useHasPermission('quote', 'edit'),
    hasShowPermission = useHasPermission('quote', 'show')

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
            <CTableHeaderCell scope="col">Titulo</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              Opciones
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((quote) => (
            <CTableRow key={quote.id}>
              <CTableHeaderCell scope="row">{quote.id}</CTableHeaderCell>
              <CTableDataCell>{quote.petitioner.name}</CTableDataCell>
              <CTableDataCell>{quote.title}</CTableDataCell>
              <CTableDataCell>{formatTimezoneToDate(quote.created_at)}</CTableDataCell>
              <CTableDataCell>
                <CBadge color={statusPurchaseRequestColors[quote.status]}>
                  {statusPurchaseRequest[quote.status]}
                </CBadge>
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
                          setQuoteData(quote)
                          setViewModalMode(true)
                          setVisible(!visible)
                        }}
                      >
                        Ver solicitud
                      </CDropdownItem>
                    )}
                    {hasEditPermission &&
                      quote.status !== 'approved' &&
                      quote.status !== 'paid' && (
                        <CDropdownItem
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setQuoteData(quote)
                            setVisible(!visible)
                          }}
                        >
                          Editar
                        </CDropdownItem>
                      )}
                    {hasDeletePermission &&
                      quote.status !== 'approved' &&
                      quote.status !== 'paid' && (
                        <CDropdownItem
                          style={{ cursor: 'pointer' }}
                          onClick={() => onDelete(quote.id)}
                        >
                          Eliminar
                        </CDropdownItem>
                      )}
                    <CDropdownItem
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setQuoteData(quote)
                        setVisibleObs(!visibleObs)
                      }}
                    >
                      Ver observaciones
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {visible && (
        <QuoteModalForm
          visible={visible}
          onClose={() => {
            setVisible(false)
            setViewModalMode(false)
          }}
          quoteData={quoteData}
          view={viewModalMode}
        />
      )}
      {visibleObs && (
        <QuoteModalObs
          quoteID={quoteData?.id}
          visible={visibleObs}
          onClose={() => setVisibleObs(false)}
        />
      )}
    </>
  )
}

export default QuoteTable
