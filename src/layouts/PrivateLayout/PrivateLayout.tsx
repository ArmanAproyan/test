import { Navigate } from 'react-router-dom'
import { Header, Footer, PageHelmet } from 'components'
import { ReactNode } from 'react'
import { ROUTE } from '@/routes/publicRoutes/route'

type PrivateLayoutProps = {
  title: string
  description: string
  children?: ReactNode
}

export const Privatelayout = ({ title, description, children }: PrivateLayoutProps) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={ROUTE.HOME} />
  }
  return (
    <div>
      <PageHelmet title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
