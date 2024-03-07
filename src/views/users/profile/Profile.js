import { CButton, CCard, CCardBody, CCardTitle, CImage } from '@coreui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfilePhotoUploadModalForm from 'src/components/users/profile/ProfilePhotoUploadModalForm'
import UserModalForm from 'src/components/users/users/UserModalForm'
const DEFAULTIMAGE = require('../../../assets/images/avatars/1.jpg')

const Profile = () => {
  const user = useSelector((state) => state.auth.user).data.user,
    [visible, setVisible] = useState(false),
    [visibleUploadPhoto, setVisibleUploadPhoto] = useState(false)

  return (
    <>
      <div className="d-flex">
        <CCard className="flex-fill mx-3">
          <CCardBody className="d-flex flex-column align-items-center">
            <div>
              <CImage rounded src={DEFAULTIMAGE} width={200} height={200} className="mt-4" />
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
                  <p className="text-start lh-sm fw-bold">{user.department.name}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.role.name}</p>
                </div>
                <div>
                  <p className="text-start lh-sm fw-bold">{user.payrollNumber}</p>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
        <div className="w-25">
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
      />
    </>
  )
}

export default Profile
