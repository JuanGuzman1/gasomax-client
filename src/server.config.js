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
  },
}

export default config
