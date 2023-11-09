import React from 'react'
import { CToast, CToastHeader, CToastBody } from '@coreui/react'

const AppToast = ({ msg, title }) => {
  return (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">{title}</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>{msg}</CToastBody>
    </CToast>
  )
}

export default AppToast
