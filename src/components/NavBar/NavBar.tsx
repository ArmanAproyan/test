import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavLinks from '../Header/Header.const'
import useOutSideClick from '@/hooks/useOutSideClick'
import Languages from '../Languages'

import styles from './NavBar.module.scss'

const NavBar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useOutSideClick(() => {
    setIsOpen(false)
  })

  const handleNavigate = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <nav ref={ref} className={styles.navBar}>
      <div className={`${styles.ulWrapper} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navBar__list}>
          {NavLinks.map(({ id, path, name }) => (
            <li className={styles.navBar__list__item} key={id}>
              <span onClick={() => handleNavigate(path)}>{name}</span>
            </li>
          ))}
          <Languages />
        </ul>
      </div>

      <div className={styles.burger} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={`${styles.line} ${isOpen ? styles.burgerTop : ''}`} />
        <div className={`${styles.line} ${isOpen ? styles.burgerMiddle : ''}`} />
        <div className={`${styles.line} ${isOpen ? styles.burgerBottom : ''}`} />
      </div>
    </nav>
  )
}

export default NavBar
