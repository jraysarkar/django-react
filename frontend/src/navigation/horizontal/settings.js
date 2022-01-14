import { Home, Circle, Edit, Pocket, Settings } from 'react-feather'

export default [
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings />,
    children: [
  
      {
        id: 'editaccountsetting',
        title: 'Edit Account',
        icon: <Edit />,
        navLink: '/settings/editaccount'
      },
      {
        id: 'billingsetting',
        title: 'Billing Settings',
        icon: <Pocket />,
        navLink: '/settings/billingsetting'
      }
    ]
  }
]
