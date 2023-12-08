import React from 'react'
import { CToast, CToastHeader, CToastBody } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilReportSlash, cilWarning, cilInfo } from '@coreui/icons'

const AppToast = ({ msg, title, type = 'success' | 'error' | 'warn' | 'info' }) => {
  return (
    <CToast>
      <CToastHeader closeButton>
        {type === 'success' && <CIcon icon={cilCheck} className="text-success" />}
        {type === 'error' && <CIcon icon={cilReportSlash} className="text-danger" />}
        {type === 'warn' && <CIcon icon={cilWarning} className="text-warning" />}
        {type === 'info' && <CIcon icon={cilInfo} className="text-info" />}
        <div className="fw-bold me-auto">{title}</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>{msg}</CToastBody>
    </CToast>
  )
}

export default AppToast
