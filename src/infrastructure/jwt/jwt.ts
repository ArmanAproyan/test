export const generateJWT = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    localStorage.setItem('token', JSON.stringify('JWT'))
  }
}

export const clearToken = () => {
  localStorage.clear()
}
