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
import ProviderModalForm from 'src/components/provider/ProviderModalForm'
import ProviderTable from 'src/components/provider/ProviderTable'
import { useDispatch, useSelector } from 'react-redux'
import { getProviders } from 'src/actions/provider'

const Providers = () => {
  const [visible, setVisible] = useState(false),
    dispatch = useDispatch(),
    providers = useSelector((state) => state.provider.providers),
    loading = useSelector((state) => state.provider.loading)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Listado de Proveedores</h3>
          <CButton color="primary" onClick={() => setVisible(!visible)}>
            Nuevo
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Filtros de busqueda</CFormLabel>
            <div className="mb-3 d-flex">
              <div className="flex-fill me-2">
                <CFormSelect
                  aria-label="caseFilter"
                  options={[
                    { label: 'Proveedor', value: 'provider' },
                    { label: 'Contacto', value: 'contact' },
                  ]}
                />
              </div>
              <div className="flex-fill me-2">
                <CFormInput type="text" id="provider" placeholder="Ingresar texto" />
              </div>
            </div>
            <CButton type="button">Buscar</CButton>
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
          <CPagination aria-label="Page navigation example" align="end">
            <CPaginationItem aria-label="Previous" disabled>
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem active>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </CCardFooter>
      </CCard>
      <ProviderModalForm visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default Providers
