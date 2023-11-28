import axios from 'axios'
import config from 'src/server.config'
import { UPLOAD_FILE, FILE_ERROR, UPLOAD_FILE_PROGRESS, DOWNLOAD_FILE, DELETE_FILE } from './types'
import { setToast } from './toast'
import { AppToast } from 'src/components'

export const uploadFile = (file, tag, model_id, model_type, cb) => async (dispatch) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('tag', tag)
    formData.append('fileable_id', model_id)
    formData.append('fileable_type', model_type)
    const res = await axios.post(`${config.instance.baseURL}/api/file`, formData, {
      headers: config.instance.headersFormData,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        dispatch({
          type: UPLOAD_FILE_PROGRESS,
          payload: percentCompleted,
        })
      },
    })
    dispatch({
      type: UPLOAD_FILE,
      payload: res.data,
    })
    cb(res.data)
    dispatch(setToast(AppToast({ msg: 'Archivo subido correctamente.', title: 'Archivos' })))
  } catch (err) {
    console.log(err)
    dispatch({
      type: FILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al subir archivo.', title: 'Archivos' })),
    )
  }
}

export const downloadFile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.instance.baseURL}/api/download/${id}`, {
      headers: config.instance.headers,
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    // Extrae el nombre del archivo de la cabecera de respuesta o proporciona uno
    const contentDisposition = res.headers['content-disposition']
    const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/)
    const extension = res.data.type.split('/')[1]
    const fileName = fileNameMatch ? fileNameMatch[1] : `archivo_descargado.${extension}`
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()

    // Limpia el enlace y el objeto URL después de la descarga
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    dispatch({
      type: DOWNLOAD_FILE,
    })
    dispatch(setToast(AppToast({ msg: 'Descargando archivo.', title: 'Archivos' })))
  } catch (err) {
    dispatch({
      type: FILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al descargar archivo.', title: 'Archivos' })),
    )
  }
}

export const deleteFilesByModel = (model_id, model_type) => async (dispatch) => {
  try {
    await axios.delete(`${config.instance.baseURL}/api/${model_id}/${model_type}/destroy/files`)
    dispatch({
      type: DELETE_FILE,
    })
    dispatch(setToast(AppToast({ msg: 'Archivo eliminado correctamente.', title: 'Archivos' })))
  } catch (err) {
    dispatch({
      type: FILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    })
    dispatch(
      setToast(AppToast({ msg: 'Ha ocurrido un error al eliminar archivo.', title: 'Archivos' })),
    )
  }
}
