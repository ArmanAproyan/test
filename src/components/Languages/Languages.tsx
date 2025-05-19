import { useTranslation } from 'react-i18next'

const Languages = () => {
  const { i18n } = useTranslation()
  return (
    <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
      <option value="ru">ru</option>
      <option value="en">en</option>
    </select>
  )
}

export default Languages
