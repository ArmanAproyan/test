import { Outlet } from 'react-router-dom'
import { Header, Footer, PageHelmet } from '@/components'

import styles from './Layout.module.scss'

const PublicLayout = () => (
  <div className={styles.layout}>
    <PageHelmet />
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default PublicLayout
