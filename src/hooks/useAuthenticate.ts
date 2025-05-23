import { useEffect, useState } from 'react'

export enum UserAuthInfo {
  LOGIN = 'Login',
  LOGOUT = 'Logout'
}

export const useAuthenticate = () => {
  const [logInfo, setLabel] = useState(UserAuthInfo.LOGIN)
  console.log(logInfo)

  const updateLabel = () => {
    const token = localStorage.getItem('token')
    setLabel(token ? UserAuthInfo.LOGOUT : UserAuthInfo.LOGIN)
  }

  useEffect(() => {
    updateLabel()
    window.addEventListener('storage', updateLabel)
    return () => window.removeEventListener('storage', updateLabel)
  }, [])

  return [logInfo, updateLabel] as const
}
