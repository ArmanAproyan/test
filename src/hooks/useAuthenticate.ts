import { useEffect, useState } from 'react'

export const AUTH_INFO = {
  LOGIN: 'Login',
  LOGOUT: 'Logout'
}

export const useAuthenticate = () => {
  const [logInfo, setLogInfo] = useState(AUTH_INFO.LOGIN)

  const updateLabel = () => {
    const token = localStorage.getItem('token')
    setLogInfo(token ? AUTH_INFO.LOGOUT : AUTH_INFO.LOGIN)
  }

  useEffect(() => {
    updateLabel()
    window.addEventListener('storage', updateLabel)
    return () => window.removeEventListener('storage', updateLabel)
  }, [])

  return [logInfo, updateLabel] as const
}
