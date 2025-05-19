import styles from './NotFound.module.scss'
import Text from '@/components/Text'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Text tag="h1" translationKey="notFound" style={{ color: 'red' }} />
    </div>
  )
}

export default NotFound
