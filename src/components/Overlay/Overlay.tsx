import { NavList } from '../NavList'
import styles from './OverLay.module.scss'
import { TOverlay } from './Overlay.types'

export const OverLay = ({ isOpen, onClose }: TOverlay) => {
  return (
    <>
      <div className={`${styles.blur} ${isOpen ? styles.blur_active : ''}`} onClick={onClose} />
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}>
        <div className={styles.header}>
          <div onClick={onClose} className={styles.close}>
            <span>x</span>
          </div>
        </div>
        <div className={styles.nav}>
          <NavList onClose={onClose} />
        </div>
      </div>
    </>
  )
}
