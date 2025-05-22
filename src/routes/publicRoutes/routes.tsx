import { PublicLayout } from '@/layouts'
import { About, Home, Login, NotFound } from '@/containers'
import { TRoute } from './routes.types'
import { PUBLIC_META } from '../metaRoutes'
import { ROUTE } from './route'

export const PUBLIC_ROUTES: TRoute[] = [
  {
    id: 1,
    name: 'Home',
    path: ROUTE.HOME,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.HOME]}>
        <Home />
      </PublicLayout>
    )
  },
  {
    id: 2,
    name: 'About',
    path: ROUTE.ABOUT,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.ABOUT]}>
        <About />
      </PublicLayout>
    )
  },
  {
    id: 3,
    name: 'NotFound',
    path: ROUTE.NOTFOUND,
    component: <NotFound />
  },
  {
    id: 4,
    name: 'Actions',
    path: ROUTE.ACTIONS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.ACTIONS]}>
        <div>Actions content coming soon</div>
      </PublicLayout>
    )
  },
  {
    id: 5,
    name: 'Contact',
    path: ROUTE.CONTACTS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.CONTACTS]}>
        <div>Contact content coming soon</div>
      </PublicLayout>
    )
  },
  {
    id: 6,
    name: 'Products',
    path: ROUTE.PRODUCTS,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.PRODUCTS]}>
        <div>Products content coming soon</div>
      </PublicLayout>
    )
  },
  {
    id: 7,
    name: 'Login',
    path: ROUTE.LOGIN,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.LOGIN]}>
        <Login />
      </PublicLayout>
    )
  }
]
