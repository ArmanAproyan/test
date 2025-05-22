import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRIVATE_ROUTE } from '@/routes'

const useLogin = () => {
  const [data, setData] = useState({ userName: '', password: '' })
  const navigate = useNavigate()

  const storedAuth = localStorage.getItem('authenticate')
  const parsedValue = storedAuth ? JSON.parse(storedAuth) : null

  useEffect(() => {
    if (parsedValue.token) {
      console.log(parsedValue.token)
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (parsedValue) {
      if (data.userName === parsedValue.userName && data.password === parsedValue.password) {
        const updated = { ...parsedValue, token: 'JWT' }
        localStorage.setItem('authenticate', JSON.stringify(updated))
        navigate(PRIVATE_ROUTE.DASHBORD)
      } else {
        console.log('❌ Wrong credentials')
      }
    } else {
      console.log('❌ No user found in localStorage')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return [handleChange, handleSubmit] as const
}

export default useLogin
