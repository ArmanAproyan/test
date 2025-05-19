import { Helmet } from 'react-helmet'
import { IconT2 } from '@/assets/icons'
import Text from '@/components/Text'
import { useNavigate } from 'react-router-dom'
import { clearToken, generateJWT } from '@/features/jwt/jwt'

import styles from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home</title>
        <meta name="home" content="Welcome to Home page"></meta>
      </Helmet>
      <Text tag="h1" translationKey="homePageWelcome" />
      <Text tag="span" translationKey="description" />
      <IconT2 height={100} />

      <button onClick={generateJWT} className={styles.button}>
        Generate JWT
      </button>
      <button onClick={clearToken} className={styles.button}>
        Clear Token
      </button>
      <button onClick={() => navigate('/private')} className={styles.button}>
        Private Layout
      </button>
    </div>
  )
}

export default Home
