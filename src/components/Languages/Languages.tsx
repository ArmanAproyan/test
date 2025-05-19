import { useTranslation } from 'react-i18next'

import styles from './Languages.module.scss'

const Languages = () => {
  const { i18n } = useTranslation()
  return (
    <div className={styles.container}>
      <select
        className={styles.languages}
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
      <div className={styles.shadow_1}></div>
      <div className={styles.shadow_2}></div>
    </div>
  )
}

export default Languages
