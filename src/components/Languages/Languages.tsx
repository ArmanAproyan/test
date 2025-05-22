import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from './Languages.const'
import { useOutSideClick } from '@/hooks'

import styles from './Languages.module.scss'

const Languages = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const dropdownRef = useOutSideClick(() => setOpen(false))

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0]

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className={styles.toggle} onClick={() => setOpen((prev) => !prev)} type="button">
        {currentLang.label}
        <span className={open ? styles.arrowUp : styles.arrowDown} />
      </button>
      <div className={styles.shadow_1}></div>
      <div className={styles.shadow_2}></div>

      {open && (
        <ul className={styles.dropdown}>
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              className={`${styles.item} ${lang.code === currentLang.code ? styles.active : ''}`}
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Languages
