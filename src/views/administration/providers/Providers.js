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
import ProviderModalForm from 'src/components/administration/provider/ProviderModalForm'
import ProviderTable from 'src/components/administration/provider/ProviderTable'
import { useDispatch, useSelector } from 'react-redux'
import { exportProviderExcel, getProviders } from 'src/actions/provider'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilCloudDownload } from '@coreui/icons'
import { AppPagination } from 'src/components/app'
import { useHasPermission } from 'src/utils/functions'

const Providers = () => {
  const [visible, setVisible] = useState(false),
    dispatch = useDispatch(),
    [caseFilter, setCaseFilter] = useState('name'),
    [filterValue, setFilterValue] = useState(''),
    providers = useSelector((state) => state.provider.providers.data),
    [currentPage, setCurrentPage] = useState(1),
    currentPageState = useSelector((state) => state.provider.providers.current_page),
    lastPage = useSelector((state) => state.provider.providers.last_page),
    total = useSelector((state) => state.provider.providers.total),
    loading = useSelector((state) => state.provider.loading)

  useEffect(() => {
    dispatch(getProviders(currentPage, caseFilter, filterValue))
  }, [dispatch, currentPage])

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
          <h4>Listado de Proveedores</h4>
          <div className="d-flex gap-2">
            {useHasPermission('providers', 'create') && (
              <CButton
                color="primary"
                className="text-light fw-semibold align-content-center d-flex"
                onClick={() => setVisible(!visible)}
              >
                <CIcon icon={cilPlus} size="xl" className="me-1" />
                Nuevo
              </CButton>
            )}
            <CButton
              color="info"
              className="text-light align-content-center d-flex"
              onClick={() => dispatch(exportProviderExcel(caseFilter, filterValue))}
            >
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
                    { label: 'Contacto', value: 'contact' },
                    { label: 'RFC', value: 'rfc' },
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
            <CButton
              type="button"
              className="text-light fw-semibold"
              onClick={() => dispatch(getProviders(currentPage, caseFilter, filterValue))}
            >
              Buscar
            </CButton>
          </CForm>
          {loading ? (
            <div className="d-flex justify-content-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          ) : (
            <ProviderTable data={providers} />
          )}
        </CCardBody>
        <CCardFooter>
          <AppPagination
            currentPage={currentPage}
            lastPage={lastPage}
            setCurrentPage={setCurrentPage}
          />
        </CCardFooter>
      </CCard>
      <ProviderModalForm visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default Providers
