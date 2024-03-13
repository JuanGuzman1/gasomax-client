const currentUrl = window.location.href
let baseURL = ''
let return_uri = ''

// Comprobar si la URL contiene algún indicador de entorno
if (currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1')) {
  baseURL = 'http://localhost:8000'
  return_uri = 'http://localhost:3000/dashboard'
} else if (currentUrl.includes('test')) {
  baseURL = 'https://api-test.grupoguerramotors.com'
  return_uri = 'https://test.grupoguerramotors.com/dashboard'
} else {
  baseURL = 'https://api-sii.grupoguerramotors.com'
  return_uri = 'https://sii.grupoguerramotors.com/dashboard'
}

const config = {
  instance: {
    baseURL,
    return_uri,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    headersFormData: {
      'Content-Type': 'multipart/form-data',
    },
    dropbox_client_id: 'g3bm3pdzcbycsb7',
  },
}

export default config
