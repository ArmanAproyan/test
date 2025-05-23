import { PublicLayout } from '@/layouts'
import { About, Home, Login, NotFound } from '@/containers'
import { TRoute } from './routes.types'
import { ROUTE } from './route'
import { PublicRouteNames } from './routes.types'
import { PUBLIC_META } from '@/routes'

export const PUBLIC_ROUTES: TRoute[] = [
  {
    id: 1,
    name: PublicRouteNames.HOME,
    path: ROUTE.HOME,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.HOME]}>
        <Home />
      </PublicLayout>
    )
  },
  {
    id: 2,
    name: PublicRouteNames.ABOUT,
    path: ROUTE.ABOUT,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.ABOUT]}>
        <About />
      </PublicLayout>
    )
  },
  {
    id: 3,
    name: PublicRouteNames.NOTFOUND,
    path: ROUTE.NOTFOUND,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.NOTFOUND]} showContext={false}>
        <NotFound />
      </PublicLayout>
    )
  },
  {
    id: 4,
    name: PublicRouteNames.ACTIONS,
    path: ROUTE.ACTIONS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.ACTIONS]}>
        <span>Actions content coming soon</span>
      </PublicLayout>
    )
  },
  {
    id: 5,
    name: PublicRouteNames.CONTACT,
    path: ROUTE.CONTACTS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.CONTACTS]}>
        <span>Contact content coming soon</span>
      </PublicLayout>
    )
  },
  {
    id: 6,
    name: PublicRouteNames.PRODUCTS,
    path: ROUTE.PRODUCTS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.PRODUCTS]}>
        <span>Products content coming soon</span>
      </PublicLayout>
    )
  },
  {
    id: 7,
    name: PublicRouteNames.LOGIN,
    path: ROUTE.LOGIN,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.LOGIN]}>
        <Login />
      </PublicLayout>
    )
  }
]
