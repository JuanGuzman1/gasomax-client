import React from 'react'
import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react'
import { cilTrash, cilFile } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import { deleteFile, downloadFile } from 'src/actions/file'

const FileCard = ({ file, onDelete }) => {
  const dispatch = useDispatch()

  const onDownloadPress = () => {
    dispatch(downloadFile(file.id))
  }

  const onDeletePress = () => {
    dispatch(
      deleteFile(file.id, () => {
        onDelete(file.id)
      }),
    )
  }

  return (
    <CCard style={{ width: '12rem' }} key={file.tag}>
      <CIcon
        icon={cilFile}
        style={{ alignSelf: 'center', marginTop: 15 }}
        size="3xl"
        className="text-dark"
      />
      <CCardBody className="w-100">
        <CCardTitle className="fs-6">{file.name}</CCardTitle>

        <div className="dp-flex mt-2">
          <CButton
            className="text-white fw-semibold me-1"
            title="Descargar"
            onClick={onDownloadPress}
          >
            Descargar
          </CButton>

          <CButton color="danger" variant="outline" title="Eliminar" onClick={onDeletePress}>
            <CIcon icon={cilTrash} />
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default FileCard
