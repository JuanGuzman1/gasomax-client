import React, { useState, useEffect, useCallback } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from 'src/actions/toast'
import { AppToast } from 'src/components/app'
import { addDepartment, updateDepartment } from 'src/actions/department'

const DepartmentModalForm = ({ visible, onClose, departmentData }) => {
  const [activeKey, setActiveKey] = useState(1),
    [departmentID, setDepartmentID] = useState(),
    [department, setDepartment] = useState(),
    dispatch = useDispatch(),
    loading = useSelector((state) => state.department.loading)

  const onSave = (e) => {
    e.preventDefault()
    if (!department) {
      alert('Ingrese un nombre')
      return
    }
    let data = {
      name: department,
    }
    dispatch(
      departmentData
        ? updateDepartment(data, departmentID, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Departamento actualizado correctamente.',
                    title: 'Departamentos',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Departamentos', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          })
        : addDepartment(data, (dataRes) => {
            if (dataRes.success) {
              dispatch(
                setToast(
                  AppToast({
                    msg: 'Departamento agregado correctamente.',
                    title: 'Departamentos',
                    type: 'success',
                  }),
                ),
              )
            } else {
              dispatch(
                setToast(
                  AppToast({ msg: 'Ha ocurrido un error.', title: 'Departamentos', type: 'error' }),
                ),
              )
            }
            cleanInputs()
            onClose()
          }),
    )
  }

  const cleanInputs = useCallback(() => {
    setDepartment()
    setActiveKey(1)
  }, [])

  useEffect(() => {
    if (!departmentData) {
      return
    }
    setDepartmentID(departmentData.id)
    setDepartment(departmentData.name)
  }, [departmentData])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="LiveDemoExampleLabel" size="lg">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="LiveDemoExampleLabel">
          {departmentData ? `Editar ${departmentData.name}` : 'Agregar nuevo'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CNav variant="tabs" role="tablist" className="mt-1">
          <CNavItem role="presentation">
            <CNavLink
              active={activeKey === 1}
              component="button"
              role="tab"
              aria-controls="data-tab-pane"
              aria-selected={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              Datos
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* department data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="department">Departamento</CFormLabel>
                <CFormInput
                  type="text"
                  id="department"
                  placeholder="nombre"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                />
              </div>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cerrar
        </CButton>
        <CButton color="primary" className="text-light fw-semibold" onClick={onSave}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DepartmentModalForm
