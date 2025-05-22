import { Footer, Header, PageHelmet } from 'components'
import styles from './Layout.module.scss'
import { PropsWithChildren } from 'react'

type PublicLayoutProps = {
  title: string
  description: string
}

export const PublicLayout = ({
  title,
  description,
  children
}: PropsWithChildren<PublicLayoutProps>) => (
  <div className={styles.layout}>
    <PageHelmet title={title} description={description} />
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)
