import { useLogin } from '@/hooks'
import styles from './Login.module.scss'

export const Login = () => {
  const [handleChange, handleSubmit] = useLogin()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.card__title}>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="Name"
            className={styles.input}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <input type="submit" className={styles.submit} value="Sign In" />
        </form>
        <p className={styles.link}>Forgot password?</p>
      </div>
    </div>
  )
}
