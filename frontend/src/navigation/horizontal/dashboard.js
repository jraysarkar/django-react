import { Home, Activity, ShoppingCart, BarChart2, ShieldOff } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Home',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Dashboard',
        icon: <BarChart2 />,
        navLink: '/dashboard/dashboard'
      },
      {
        id: 'ecommerceDash',
        title: 'Attacks',
        icon: <ShieldOff />,
        navLink: '/dashboard/attacks'
      },
      {
        id: 'assetsDash',
        title: 'Assets',
        icon: <Activity />,
        navLink: '/dashboard/assets'
      }
    ]
  }
]
