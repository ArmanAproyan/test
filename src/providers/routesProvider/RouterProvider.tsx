import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/layouts/MainLayout'
import routes from '@/routes/globlaRoutes/routes'

const RouterProvder = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouterProvder
