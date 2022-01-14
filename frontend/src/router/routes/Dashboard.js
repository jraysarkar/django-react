import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/dashboard',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/attacks',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/dashboard/assets',
    component: lazy(() => import('../../views/dashboard/assets')),
    exact: true
  },
  {
    path: '/dashboard/detailspage',
    component: lazy(() => import('../../views/dashboard/detailspage')),
    exact: true
  },
  {
    path: '/dashboard/testpage',
    component: lazy(() => import('../../views/dashboard/testpage')),
    exact: true
  }
]

export default DashboardRoutes
