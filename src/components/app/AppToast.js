import React from 'react'
import { CToast, CToastHeader, CToastBody } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilReportSlash, cilWarning, cilInfo } from '@coreui/icons'

const AppToast = ({ msg, title, type = 'success' | 'error' | 'warn' | 'info' }) => {
  let titleToast = ''

  if (title) {
    titleToast = title
  } else if (type === 'success') {
    titleToast = 'Correcto'
  } else if (type === 'error') {
    titleToast = 'Error'
  } else if (type === 'info') {
    titleToast = 'Información'
  } else if (type === 'warn') {
    titleToast = 'Advertencia'
  }

  return (
    <CToast>
      <CToastHeader closeButton>
        {type === 'success' && <CIcon icon={cilCheck} className="text-success" />}
        {type === 'error' && <CIcon icon={cilReportSlash} className="text-danger" />}
        {type === 'warn' && <CIcon icon={cilWarning} className="text-warning" />}
        {type === 'info' && <CIcon icon={cilInfo} className="text-info" />}
        <div className="fw-bold me-auto">{titleToast}</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>{msg}</CToastBody>
    </CToast>
  )
}

export default AppToast
