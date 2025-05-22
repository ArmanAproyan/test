import { Helmet } from 'react-helmet-async'
import { THelmetProps } from './PageHelmet.props'

const PageHelmet = ({ title = 'Gucci', description = 'Default description' }: THelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default PageHelmet
