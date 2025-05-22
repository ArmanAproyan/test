import { useNavigate } from 'react-router-dom'
import { GucciLogo, SearchIcon, PersonIcon, Bag } from '@/assets/icons'
import { ROUTE } from '@/routes/publicRoutes'
import { Burger } from '@/components'

import styles from './Header.module.scss'

const Header = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate(ROUTE.HOME)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <GucciLogo onClick={navigateToHome} className={styles.logo} />
      </div>
      <div className={styles.header__other}>
        <Bag className={styles.header__icons} />
        <PersonIcon className={styles.header__icons} />
        <SearchIcon className={styles.header__icons} />
        <Burger />
      </div>
    </header>
  )
}

export default Header
