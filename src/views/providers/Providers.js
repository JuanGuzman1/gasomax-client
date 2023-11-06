/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
  CPaginationItem,
  CCardFooter,
  CButton,
} from '@coreui/react'
import ProviderModalForm from 'src/components/provider/ProviderModalForm'
import ProviderTable from 'src/components/provider/ProviderTable'

const Providers = () => {
  const [provider, setProvider] = useState(),
    [visible, setVisible] = useState(false)
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
          <ProviderTable />
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
