/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
  CPaginationItem,
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
import PurchaseRequestTable from 'src/components/payments/purchaseRequest/PurchaseRequestTable'
import PurchaseRequestModalForm from 'src/components/payments/purchaseRequest/PurchaseRequestModalForm'

const PurchaseRequest = () => {
  const [visible, setVisible] = useState(false),
    [caseFilter, setCaseFilter] = useState('name'),
    [filterValue, setFilterValue] = useState(''),
    [currentPage, setCurrentPage] = useState(1),
    lastPage = 1

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h4>Listado de solicitudes</h4>
          <div className="d-flex gap-2">
            <CButton
              color="primary"
              className="text-light fw-semibold align-content-center d-flex"
              onClick={() => setVisible(!visible)}
            >
              <CIcon icon={cilPlus} size="xl" className="me-1" />
              Nuevo
            </CButton>
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
                    { label: 'Proveedor', value: 'name' },
                    { label: 'Solicitante', value: 'contact' },
                    { label: 'Status', value: 'rfc' },
                  ]}
                />
              </div>
              <div className="flex-fill me-2">
                <CFormInput
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  type="text"
                  id="provider"
                  placeholder="Ingresar texto"
                />
              </div>
            </div>
            <CButton type="button" className="text-light fw-semibold">
              Buscar
            </CButton>
          </CForm>
          {/* {loading ? (
            <div className="d-flex justify-content-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          ) : (
            <ProviderTable data={providers} />
          )} */}
          <PurchaseRequestTable />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
      <PurchaseRequestModalForm visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default PurchaseRequest
