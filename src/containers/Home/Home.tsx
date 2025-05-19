import { Helmet } from 'react-helmet'
import { IconT2 } from '@/assets/icons'
import Text from '@/components/Text'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { useState } from 'react'
import { actions } from './Home.const'

const Home: React.FC = () => {
  const nav = useNavigate()
  const [msg, setMsg] = useState<string>('')

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to Home page" />
      </Helmet>

      <Text tag="h1" translationKey="homePageWelcome" />
      <Text tag="span" translationKey="description" />
      <IconT2 height={100} />
      <span>{msg}</span>

      {actions.map(({ label, run }) => (
        <button key={label} className={styles.button} onClick={() => run(setMsg, nav)}>
          {label}
        </button>
      ))}
    </div>
  )
}

export default Home
