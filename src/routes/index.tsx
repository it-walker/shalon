import { ReactNode } from 'react'
import { Route } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import appRoutes from './appRoutes'
import { RouteType } from './config'

const generateRoute = (routes: RouteType[]): ReactNode =>
  routes.map((route, index) =>
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>{route.element}</PageWrapper>
        }
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        {route.child && generateRoute(route.child)}
      </Route>
    )
  )

export const routes: ReactNode = generateRoute(appRoutes)
