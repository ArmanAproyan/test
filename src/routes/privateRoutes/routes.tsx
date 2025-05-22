import { Privatelayout } from '@/layouts'
import { PRIVATE_ROUTE } from './route'
import { TRoute } from '../publicRoutes'
import { PRIVATE_META } from '../metaRoutes'

export const PRIVATE_ROUTES: TRoute[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: PRIVATE_ROUTE.DASHBORD,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.DASHBORD]}>
        <h1>Dashboard</h1>
      </Privatelayout>
    )
  },
  {
    id: 2,
    name: 'Account',
    path: PRIVATE_ROUTE.ACCAUNT,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.ACCAUNT]}>
        <h1>Account</h1>
      </Privatelayout>
    )
  },
  {
    id: 3,
    name: 'History',
    path: PRIVATE_ROUTE.HISTORY,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.HISTORY]}>
        <h1>History</h1>
      </Privatelayout>
    )
  }
]
