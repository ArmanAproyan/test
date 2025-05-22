import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.card__title}>Login</h1>
        <form>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <input type="submit" className={styles.submit} value={'Sign In'} />
        </form>
        <p className={styles.link}>Forgot password?</p>
      </div>
    </div>
  )
}

export default Login
