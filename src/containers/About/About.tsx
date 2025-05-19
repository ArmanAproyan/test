import { IconT } from '@/assets/icons'
import { Helmet } from 'react-helmet'
import Text from '@/components/Text'

import styles from './About.module.scss'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="about" content="Welcome to About page" />
      </Helmet>
      <div className={styles.container}>
        <IconT height={100} width={100} />
        <Text tag="h1" translationKey="aboutPageWelcome" />
        <Text tag="p" translationKey="description" />
      </div>
    </>
  )
}

export default About
