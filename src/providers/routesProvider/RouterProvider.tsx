import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PublicLayout, PrivateLayout } from '@/layouts'
import ROUTES from '@/routes/publicRoutes'
import PRIVATE_ROUTES from '@/routes/privateRoutes'

const RouterProvder = () => (
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          {ROUTES.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Route>

        <Route element={<PrivateLayout />}>
          {PRIVATE_ROUTES.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Route>
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
)

export default RouterProvder
