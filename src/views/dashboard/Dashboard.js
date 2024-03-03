import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartBar, CChart } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={5}>
            <h4 id="traffic" className="card-title mb-0">
              Inicio
            </h4>
            <div className="small text-medium-emphasis">January - July 2021</div>
          </CCol>
          <CCol sm={7} className="d-none d-md-block">
            <CButton color="primary" className="float-end">
              <CIcon icon={cilCloudDownload} />
            </CButton>
          </CCol>
        </CRow>
        <div className="d-flex justify-content-around mt-3 align-items-center">
          <div className="">
            <h2>Solicitudes de compra</h2>
            <div>
              <h1 style={{ fontSize: 80 }}>1</h1>
            </div>
          </div>
          <div className="w-50 h-50">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  'Enviadas',
                  'En proceso',
                  'Aprobadas',
                  'VoBo',
                  'Autorizadas',
                  'Rechazadas',
                  'Por pagar',
                  'Pagadas',
                ],
                datasets: [
                  {
                    backgroundColor: [
                      '#FFA500',
                      '#00FFFF',
                      '#00FF00',
                      '#008000',
                      '#0000FF',
                      '#FF0000',
                      '#30AFD4',
                      '#800080',
                    ],
                    data: [1, 0, 0, 0, 0, 0, 0, 0],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </CCardBody>
      <CCardFooter></CCardFooter>
    </CCard>
  )
}

export default Dashboard
