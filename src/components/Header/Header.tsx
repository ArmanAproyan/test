import styles from './Header.module.scss'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className={styles.header}>
      <h1 onClick={() => navigate('/')}>Header</h1>
      <ul className={styles.ul}>
        <NavBar />
      </ul>
    </header>
  )
}

export default Header
