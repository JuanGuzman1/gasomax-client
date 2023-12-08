import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Gasomax
        </a>
        <span className="ms-1">&copy; 2023 Estación guerra.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://gasomax.com.mx/estacion-guerra.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gasomax Guerra
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
