import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Privatelayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isProtected = !!localStorage.getItem('token')
    if (!isProtected) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div>
      <h1>Private Layout</h1>
    </div>
  )
}

export default Privatelayout
