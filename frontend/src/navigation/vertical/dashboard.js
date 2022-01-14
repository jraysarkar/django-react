import { Home, Circle, MessageSquare, BarChart2, ShieldOff, Activity } from 'react-feather'

export default [
  {
    header: 'Home'
  },
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
      /*{
        id: 'detailsDash',
        title: 'Details Page',
        icon: <Activity />,
        navLink: '/dashboard/detailspage'
      }*/
      /*{
        id: 'detailsDash',
        title: 'test Page',
        icon: <Activity />,
        navLink: '/dashboard/testpage'
      }*/

]
