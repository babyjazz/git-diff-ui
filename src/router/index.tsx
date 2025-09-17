import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/components/layout'
import { ROUTES } from '@/constants/routes'
import Home from '@/pages/home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.HOME_PR} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
