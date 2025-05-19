import { useNavigate } from 'react-router-dom'
import NavLinks from './Header.constants'
import styles from './Header.module.scss'
import Languages from '../Languages/Languages'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <ul className={styles.ul}>
        {NavLinks.map(({ id, path, name }) => {
          return (
            <li key={id}>
              <span onClick={() => navigate(path)}>{name}</span>
            </li>
          )
        })}
        <Languages />
      </ul>
    </header>
  )
}

export default Header
