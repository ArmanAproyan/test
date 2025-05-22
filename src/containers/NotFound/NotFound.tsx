import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'
export const NotFound = () => {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }

  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.content__title}>404</h1>
        <p className={styles.content__message}>Page not found</p>
        <div className={styles.content__button} onClick={navigateHome}>
          Go back home
        </div>
      </div>
    </section>
  )
}
