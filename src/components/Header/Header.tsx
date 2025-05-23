import { useNavigate } from 'react-router-dom'
import { GucciLogo, SearchIcon, PersonIcon, Bag } from '@/assets/icons'
import { Burger } from 'components'
import { ROUTE } from '@/routes'
import { useAuthenticate, UserAuthInfo } from '@/hooks'
import styles from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()
  const [logInfo, updateLabel] = useAuthenticate()

  const handleClick = () => {
    if (logInfo === UserAuthInfo.LOGOUT) {
      localStorage.removeItem('token')
      updateLabel()
      navigate(ROUTE.LOGIN)
    } else {
      navigate(ROUTE.LOGIN)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <GucciLogo onClick={() => navigate(ROUTE.HOME)} className={styles.logo} />
      </div>
      <div className={styles.header__other}>
        <Bag className={styles.header__icons} />
        <PersonIcon className={styles.header__icons} />
        <SearchIcon className={styles.header__icons} />
        <span className={styles.header__login} onClick={handleClick}>
          {logInfo}
        </span>
        <Burger />
      </div>
    </header>
  )
}
