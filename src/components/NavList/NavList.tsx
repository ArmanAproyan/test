import { useNavigate } from 'react-router-dom'
import { TNavlist } from './NavList.types'
import styles from './NavList.module.scss'
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@/routes'

export const NavList = ({ onClose }: TNavlist) => {
  const navigate = useNavigate()
  const handleClick = (path: string) => {
    onClose()
    navigate(path)
  }
  const visibleRoutes = PUBLIC_ROUTES.filter(
    (route) => route.name !== 'Login' && route.name !== 'Not Found'
  ).concat(PRIVATE_ROUTES)

  return (
    <ul className={styles.menu}>
      {visibleRoutes.map(({ path, name, id }) => {
        return (
          <li key={id}>
            <span onClick={() => handleClick(path)}>{name}</span>
          </li>
        )
      })}
    </ul>
  )
}
