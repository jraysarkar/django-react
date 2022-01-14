import { Home, Circle, Edit, Pocket } from 'react-feather'

export default [
  {
    header: 'Settings'
  },
  
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
