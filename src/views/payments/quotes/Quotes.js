/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CButton,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormInput,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilCloudDownload } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppPagination } from 'src/components/app'
import { useHasPermission } from 'src/utils/functions'
import QuoteModalForm from 'src/components/payments/quotes/QuoteModalForm'
import QuoteTable from 'src/components/payments/quotes/QuoteTable'
import { getQuotes } from 'src/actions/quote'

const Quotes = () => {
  const [visible, setVisible] = useState(false),
    [caseFilter, setCaseFilter] = useState('provider'),
    [filterValue, setFilterValue] = useState(''),
    [currentPage, setCurrentPage] = useState(1),
    dispatch = useDispatch(),
    {
      currentPage: currentPageState,
      last_page,
      data: quotes,
    } = useSelector((state) => state.quote.quotes),
    loading = useSelector((state) => state.quote.loading)

  useEffect(() => {
    dispatch(getQuotes(currentPage, caseFilter, filterValue))
  }, [currentPage, dispatch])

  useEffect(() => {
    if (!currentPageState) {
      return
    }
    setCurrentPage(currentPageState)
  }, [currentPageState])

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h4>Solicitudes de compra</h4>
          <div className="d-flex gap-2">
            {useHasPermission('quotes', 'create') && (
              <CButton
                color="primary"
                className="text-light fw-semibold align-content-center d-flex"
                onClick={() => setVisible(!visible)}
              >
                <CIcon icon={cilPlus} size="xl" className="me-1" />
                Nuevo
              </CButton>
            )}
            <CButton color="info" className="text-light align-content-center d-flex">
              <CIcon icon={cilCloudDownload} size="xl" />
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Filtros de busqueda</CFormLabel>
            <div className="mb-3 d-flex">
              <div className="flex-fill me-2">
                <CFormSelect
                  value={caseFilter}
                  onChange={(e) => setCaseFilter(e.target.value)}
                  aria-label="caseFilter"
                  options={[
                    { label: 'Proveedor', value: 'provider' },
                    { label: 'Solicitante', value: 'petitioner' },
                    { label: 'Status', value: 'status' },
                  ]}
                />
              </div>
              <div className="flex-fill me-2">
                {caseFilter !== 'status' ? (
                  <CFormInput
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    type="text"
                    id="provider"
                    placeholder="Ingresar texto"
                  />
                ) : (
                  <CFormSelect
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    aria-label="caseFilter"
                    options={[
                      { label: 'Pendientes', value: 'pending' },
                      { label: 'Revisadas', value: 'review' },
                      { label: 'Aprobadas', value: 'approved' },
                      { label: 'Rechazadas', value: 'rejects' },
                    ]}
                  />
                )}
              </div>
            </div>
            <CButton
              type="button"
              className="text-light fw-semibold"
              onClick={() => dispatch(getQuotes(currentPage, caseFilter, filterValue))}
            >
              Buscar
            </CButton>
          </CForm>
          {loading ? (
            <div className="d-flex justify-content-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          ) : (
            <QuoteTable data={quotes} />
          )}
        </CCardBody>
        <CCardFooter>
          <AppPagination
            currentPage={currentPage}
            lastPage={last_page}
            setCurrentPage={setCurrentPage}
          />
        </CCardFooter>
      </CCard>
      {visible && <QuoteModalForm visible={visible} onClose={() => setVisible(false)} />}
    </>
  )
}

export default Quotes
