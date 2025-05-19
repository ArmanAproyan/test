import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Privatelayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isProtected = !!localStorage.getItem('token')
    if (!isProtected) {
      navigate('/')
    }
  })
  return (
    <div>
      <h1>Hello</h1>
      <header>header</header>
      <main>Mainnn</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Privatelayout
