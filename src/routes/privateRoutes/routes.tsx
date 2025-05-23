import { Privatelayout } from '@/layouts'
import { PRIVATE_ROUTE } from './route'
import { TRoute } from '@/routes'
import { PRIVATE_META } from '../metaRoutes'
import { PrivateRouteNames } from './route'
import { Accaunt } from '@/containers'

export const PRIVATE_ROUTES: TRoute[] = [
  {
    id: 10,
    name: PrivateRouteNames.DASHBOARD,
    path: PRIVATE_ROUTE.DASHBORD,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.DASHBORD]}>
        <span>Dashboard</span>
      </Privatelayout>
    )
  },
  {
    id: 11,
    name: PrivateRouteNames.ACCAUNT,
    path: PRIVATE_ROUTE.ACCAUNT,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.ACCAUNT]}>
        <Accaunt />
      </Privatelayout>
    )
  },
  {
    id: 12,
    name: PrivateRouteNames.HISTORY,
    path: PRIVATE_ROUTE.HISTORY,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.HISTORY]}>
        <span>History</span>
      </Privatelayout>
    )
  }
]
