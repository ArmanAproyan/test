import { TRoute } from '../publicRoutes/routes.types'
import { PRIVATE_ROUTE } from './route'

const PRIVATE_ROUTES: TRoute[] = [
  { id: 1, name: 'Dashbord', path: PRIVATE_ROUTE.DASHBORD, component: <></> },
  { id: 2, name: 'Accaunt', path: PRIVATE_ROUTE.ACCAUNT, component: <></> },
  { id: 3, name: 'NotFound', path: PRIVATE_ROUTE.NOTFOUND, component: <></> },
  { id: 4, name: 'HISTORY', path: PRIVATE_ROUTE.HISTORY, component: <></> }
]

export default PRIVATE_ROUTES
