import React, { useState, useEffect, useCallback, useRef } from 'react'
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
  CProgress,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fileTags } from 'src/utils/fileTags'
import { deleteFile, uploadFile } from 'src/actions/file'
import { modelTypes } from 'src/utils/modelTypes'
import { getUser } from 'src/actions/auth'
import { getBase64 } from 'src/utils/functions'

const ProfilePhotoUploadModalForm = ({ visible, onClose, userData, selectedImage }) => {
  const [activeKey, setActiveKey] = useState(1),
    [userID, setUserID] = useState(),
    [profilePhotoFile, setProfilePhotoFile] = useState(null),
    progress = useSelector((state) => state.file.progress),
    dispatch = useDispatch(),
    photo = useRef()

  useEffect(() => {
    if (!userData) {
      return
    }
    setUserID(userData.id)
  }, [userData])

  useEffect(() => {
    if (!profilePhotoFile) {
      return
    }
    const imageSelected = async () => {
      let result = await getBase64(profilePhotoFile.file)
      selectedImage(result)
    }
    imageSelected()
  }, [profilePhotoFile, selectedImage])

  const onSave = () => {
    try {
      if (userData.files.length > 0) {
        let image = userData.files.find((file) => file.tag === fileTags.img)
        if (image) {
          dispatch(deleteFile(image.id, () => console.log('Foto eliminada')))
        }
      }

      dispatch(
        uploadFile(
          profilePhotoFile.file,
          profilePhotoFile.tag,
          null,
          userID,
          modelTypes.user,
          () => {
            dispatch(getUser())
          },
        ),
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onClose()
      }, 3000)
    }
  }, [progress, onClose])

  return (
    <CModal visible={visible} onClose={onClose} aria-labelledby="uploadPhoto" alignment="center">
      <CModalHeader onClose={onClose}>
        <CModalTitle id="uploadPhoto">
          {userData ? `Editar ${userData.name}` : 'Agregar nuevo'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {profilePhotoFile && !profilePhotoFile?.id && (
          <CProgress value={progress} className="mb-2">
            {progress}%
          </CProgress>
        )}
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
              Foto
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          {/* user data */}
          <CTabPane role="tabpanel" aria-labelledby="data-tab-pane" visible={activeKey === 1}>
            <CForm className="mt-3">
              <div className="mb-3">
                <CFormLabel htmlFor="name">Sube una foto o imagen de perfil</CFormLabel>
                <CFormInput
                  ref={photo}
                  type="file"
                  id="photo"
                  onChange={(e) =>
                    setProfilePhotoFile({
                      file: e.target.files[0],
                      tag: fileTags.img,
                      fileName: e.target.files[0].name,
                    })
                  }
                  accept="image/*"
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

export default ProfilePhotoUploadModalForm
