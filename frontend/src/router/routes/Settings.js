import { lazy } from 'react'

const SettingsRoutes = [
  // Settings
  {
    path: '/settings/editaccount',
    component: lazy(() => import('../../views/settings/editaccount'))
  }
]

export default SettingsRoutes