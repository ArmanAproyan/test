import { Navigate, Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components'
import { ROUTE } from '@/routes/publicRoutes'

const Privatelayout = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={ROUTE.LOGIN} />
  }
  return (
    <div>
      <Header />
      <h1>Private Layout</h1>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Privatelayout
