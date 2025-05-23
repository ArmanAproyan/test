import { Footer, Header, PageHelmet } from 'components'
import styles from './Layout.module.scss'
import { PropsWithChildren } from 'react'

type PublicLayoutProps = {
  title: string
  description: string
  shiwHeaderFooter?: boolean
}

export const PublicLayout = ({
  title,
  description,
  shiwHeaderFooter = true,
  children
}: PropsWithChildren<PublicLayoutProps>) => (
  <div className={styles.layout}>
    <PageHelmet title={title} description={description} />
    {shiwHeaderFooter && <Header />}
    <main className={styles.main}>{children}</main>
    {shiwHeaderFooter && <Footer />}
  </div>
)
