const config = {
  instance: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://api-test.grupoguerramotors.com',
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
