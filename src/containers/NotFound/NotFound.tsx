import styles from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('notFound')}</h1>
    </div>
  )
}

export default NotFound
