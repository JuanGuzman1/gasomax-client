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
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import { AppPagination } from 'src/components/app'
import { getUsers } from 'src/actions/user'
import UserTable from 'src/components/users/users/UserTable'
import UserModalForm from 'src/components/users/users/UserModalForm'
import { useHasPermission } from 'src/utils/functions'

const Users = () => {
  const [visible, setVisible] = useState(false),
    dispatch = useDispatch(),
    [caseFilter, setCaseFilter] = useState('name'),
    [filterValue, setFilterValue] = useState(''),
    users = useSelector((state) => state.user.users.data),
    [currentPage, setCurrentPage] = useState(1),
    currentPageState = useSelector((state) => state.user.users.current_page),
    lastPage = useSelector((state) => state.user.users.last_page),
    total = useSelector((state) => state.user.users.total),
    loading = useSelector((state) => state.user.loading)

  useEffect(() => {
    dispatch(getUsers(currentPage, caseFilter, filterValue))
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
          <h4>Listado de usuarios</h4>
          <div className="d-flex gap-2">
            {useHasPermission('users', 'create') && (
              <CButton
                color="primary"
                className="text-light fw-semibold align-content-center d-flex"
                onClick={() => setVisible(!visible)}
              >
                <CIcon icon={cilPlus} size="xl" className="me-1" />
                Nuevo
              </CButton>
            )}
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
                  options={[{ label: 'Nombre', value: 'name' }]}
                />
              </div>
              <div className="flex-fill me-2">
                <CFormInput
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  type="text"
                  placeholder="Ingresar texto"
                />
              </div>
            </div>
            <CButton
              type="button"
              className="text-light fw-semibold"
              onClick={() => dispatch(getUsers(currentPage, caseFilter, filterValue))}
            >
              Buscar
            </CButton>
          </CForm>
          {loading ? (
            <div className="d-flex justify-content-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          ) : (
            <UserTable data={users} />
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
      <UserModalForm visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default Users
