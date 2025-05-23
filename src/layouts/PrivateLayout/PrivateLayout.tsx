import { Navigate } from 'react-router-dom'
import { Header, Footer, PageHelmet } from 'components'
import { PropsWithChildren, ReactNode } from 'react'
import { ROUTE } from '@/routes'

import styles from './PrivateLayout.module.scss'

type PrivateLayoutProps = {
  title: string
  description: string
  children?: ReactNode
}

export const Privatelayout = ({
  title,
  description,
  children
}: PropsWithChildren<PrivateLayoutProps>) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={ROUTE.LOGIN} />
  }
  return (
    <div className={styles.layout}>
      <PageHelmet title={title} description={description} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
