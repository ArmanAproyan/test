import styles from './Login.module.scss'

export const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.card__title}>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="name" placeholder="Name" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <input type="submit" className={styles.submit} value={'Sign In'} />
        </form>
        <p className={styles.link}>Forgot password?</p>
      </div>
    </div>
  )
}
