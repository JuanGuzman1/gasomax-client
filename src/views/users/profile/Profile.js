import { CButton, CCard, CCardBody, CCardTitle, CImage } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUrlImage } from 'src/actions/file'
import ProfilePhotoUploadModalForm from 'src/components/users/profile/ProfilePhotoUploadModalForm'
import UserModalForm from 'src/components/users/users/UserModalForm'
const DEFAULTIMAGE = require('../../../assets/images/avatars/1.jpg')

const Profile = () => {
  const { user: userState, profilePicture } = useSelector((state) => state.auth),
    user = userState?.data.user,
    [visible, setVisible] = useState(false),
    [visibleUploadPhoto, setVisibleUploadPhoto] = useState(false),
    [selectedImage, setSelectedImage] = useState(null),
    dispatch = useDispatch()

  useEffect(() => {
    if (!profilePicture) {
      return
    }
    setSelectedImage(profilePicture)
  }, [profilePicture])

  return (
    <>
      <div className="d-md-flex flex-md-row">
        <CCard className="flex-fill mx-md-3">
          <CCardBody className="d-flex flex-column align-items-center">
            <div>
              <CImage
                rounded
                src={selectedImage ? selectedImage : DEFAULTIMAGE}
                width={200}
                height={200}
                className="mt-4"
              />
              <p
                className="text-primary text-center text-decoration-underline"
                onClick={() => setVisibleUploadPhoto(!visibleUploadPhoto)}
              >
                Cambiar imagen
              </p>
            </div>
            <CCardTitle className="text-primary fs-3 mt-3">{user.name}</CCardTitle>
            <hr className="text-secondary w-25" />
            <div className="d-flex mt-2">
              <div className="mx-1">
                <div>
                  <p className="text-end lh-sm fw-semibold text-muted">Nombre:</p>
                </div>
                <div>
                  <p className="text-end lh-sm fw-semibold text-muted">Correo electrónico:</p>
                </div>
                <div>
                  <p className="text-end lh-sm fw-semibold text-muted">Departamento:</p>
                </div>
                <div>
                  <p className="text-end lh-sm fw-semibold text-muted">Puesto:</p>
                </div>
                <div>
                  <p className="text-end lh-sm fw-semibold text-muted">No. Nomina:</p>
                </div>
              </div>
              <div className="mx-1">
                <div>
                  <p className="text-start lh-sm fw-bold">{user.name}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.email}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.department?.name}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.role?.name}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.payrollNumber}</p>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
        <div className="w-auto">
          <CCard>
            <CCardBody>
              <CButton
                className="w-100 p-3 text-white fw-normal"
                style={{ backgroundColor: '#21274E' }}
                onClick={() => setVisible(!visible)}
              >
                Cambiar contraseña
              </CButton>
            </CCardBody>
          </CCard>
        </div>
      </div>
      {visible && (
        <UserModalForm
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          userData={user}
          visibleChangePassword={true}
          fromProfile={true}
        />
      )}

      <ProfilePhotoUploadModalForm
        visible={visibleUploadPhoto}
        onClose={() => {
          setVisibleUploadPhoto(false)
        }}
        userData={user}
        selectedImage={setSelectedImage}
      />
    </>
  )
}

export default Profile
