import { ReactNode } from 'react'
import { About, Home, NotFound } from '@/containers'
import Privatelayout from '@/layouts/PrivateLayout/PrivateLayout'
import { RoutesEum } from './routes.enums'

type TRoutes = {
  id: number
  name: string
  path: string
  component: ReactNode
}

const Routes: TRoutes[] = [
  { id: 1, name: 'Home', path: RoutesEum.HOME, component: <Home /> },
  { id: 2, name: 'About', path: RoutesEum.ABOUT, component: <About /> },
  { id: 3, name: 'NotFound', path: RoutesEum.NOTFOUND, component: <NotFound /> },
  { id: 4, name: 'PrivateLayout', path: RoutesEum.PRIVATELAYOUT, component: <Privatelayout /> }
]

export default Routes
