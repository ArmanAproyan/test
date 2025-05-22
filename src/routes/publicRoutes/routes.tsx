import { About, Home, Login, NotFound } from '@/containers'
import { ROUTE } from './route'
import { TRoute } from './routes.types'

const ROUTES: TRoute[] = [
  { id: 1, name: 'Home', path: ROUTE.HOME, component: <Home /> },
  { id: 2, name: 'About', path: ROUTE.ABOUT, component: <About /> },
  { id: 3, name: 'NotFound', path: ROUTE.NOTFOUND, component: <NotFound /> },
  { id: 4, name: 'Actions', path: ROUTE.ACTIONS, component: <></> },
  { id: 5, name: 'Contact', path: ROUTE.CONTACTS, component: <></> },
  { id: 6, name: 'Products', path: ROUTE.PRODUCTS, component: <></> },
  { id: 7, name: 'Login', path: ROUTE.LOGIN, component: <Login /> }
]

export default ROUTES
