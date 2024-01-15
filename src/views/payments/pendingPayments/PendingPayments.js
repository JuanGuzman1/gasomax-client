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
import { cilCloudDownload } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getPendingPayments } from 'src/actions/pendingPayments'
import { AppPagination } from 'src/components/app'
import PendingPaymentsTable from 'src/components/payments/pendingPayments/PendingPaymentsTable'

const PendingPayments = () => {
  const [caseFilter, setCaseFilter] = useState('provider'),
    [filterValue, setFilterValue] = useState(''),
    [currentPage, setCurrentPage] = useState(1),
    dispatch = useDispatch(),
    {
      currentPage: currentPageState,
      last_page,
      data: pendingPayments,
    } = useSelector((state) => state.pendingPayments.pendingPayments),
    loading = useSelector((state) => state.pendingPayments.loading)

  useEffect(() => {
    dispatch(getPendingPayments(currentPage, caseFilter, filterValue))
  }, [currentPage, dispatch])

  useEffect(() => {
    if (!currentPageState) {
      return
    }
    setCurrentPage(currentPageState)
  }, [currentPageState])

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <h4>Listado de Pagos Pendientes</h4>
        <div className="d-flex gap-2">
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
            onClick={() => dispatch(getPendingPayments(currentPage, caseFilter, filterValue))}
          >
            Buscar
          </CButton>
        </CForm>
        {loading ? (
          <div className="d-flex justify-content-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        ) : (
          <PendingPaymentsTable data={pendingPayments} />
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
  )
}

export default PendingPayments
