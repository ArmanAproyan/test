import styles from './Accaunt.module.scss'

export const Account = () => {
  const userData = localStorage.getItem('authentication')
  const { userName } = JSON.parse(userData)

  return <h1 className={styles.title}>Welcome {userName}</h1>
}
