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
      // Pragma: 'no-cache',
    },
  },
}

export default config
