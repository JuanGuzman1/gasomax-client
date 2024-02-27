import React from 'react'
import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react'
import { cilTrash, cilFile, cilAirplay, cilCloudDownload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import { deleteFile, downloadFile, viewFile } from 'src/actions/file'
import { fileTagsName } from 'src/utils/fileTags'
import { deleteQuoteFile, downloadQuoteFile, viewQuoteFile } from 'src/actions/quote'

const FileCard = ({ file, onDelete, viewMode = false, quoteFile }) => {
  const dispatch = useDispatch()

  const onDownloadPress = () => {
    if (quoteFile) {
      dispatch(downloadQuoteFile(file.id))
    } else {
      dispatch(downloadFile(file.id))
    }
  }

  const onViewFile = () => {
    if (quoteFile) {
      dispatch(viewQuoteFile(file.id))
    } else {
      dispatch(viewFile(file.id))
    }
  }

  const onDeletePress = () => {
    if (!file.id) {
      onDelete(null)
      return
    }
    if (quoteFile) {
      dispatch(
        deleteQuoteFile(file.id, () => {
          onDelete(file.id)
        }),
      )
    } else {
      dispatch(
        deleteFile(file.id, () => {
          onDelete(file.id)
        }),
      )
    }
  }

  return (
    <CCard style={{ width: '12rem' }} key={file.tag} className="me-2">
      <CIcon
        icon={cilFile}
        style={{ alignSelf: 'center', marginTop: 15 }}
        size="3xl"
        className="text-dark"
      />
      <CCardBody className="w-100">
        <CCardTitle className="fs-6 text-center">{file.localName}</CCardTitle>
        <CCardTitle className="fs-6 fw-light text-center">{fileTagsName[file.tag]}</CCardTitle>
        <div className="dp-flex mt-2">
          {file.id && (
            <CButton className="text-white fw-semibold" title="Descargar" onClick={onDownloadPress}>
              <CIcon icon={cilCloudDownload} />
            </CButton>
          )}
          {file.id && file?.extension === 'pdf' && (
            <CButton
              className="mx-1"
              color="info"
              variant="outline"
              title="Ver"
              onClick={onViewFile}
            >
              <CIcon icon={cilAirplay} />
            </CButton>
          )}
          {!viewMode && (
            <CButton color="danger" variant="outline" title="Eliminar" onClick={onDeletePress}>
              <CIcon icon={cilTrash} />
            </CButton>
          )}
        </div>
      </CCardBody>
    </CCard>
  )
}

export default FileCard
