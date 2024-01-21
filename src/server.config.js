const config = {
  instance: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https:/cms.grupoguerra.com',
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    headersFormData: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  },
}

export default config
