import { useState } from 'react'
import styles from './Burger.module.scss'
import { useLockBodyScroll } from '@/hooks'
import { OverLay } from 'components'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  useLockBodyScroll(isOpen)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.burger__line__item}></div>
          <div className={styles.burger__line__item}></div>
          <div className={styles.burger__line__item}></div>
        </div>
        <span className={styles.burger__text} onClick={toggleMenu}>
          Menu
        </span>
      </nav>
      <OverLay isOpen={isOpen} onClose={toggleMenu} />
    </>
  )
}
