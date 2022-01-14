import { Home, Activity, ShoppingCart, Settings, Mail, Users, CheckSquare, UserPlus, Circle } from 'react-feather'

export default [
  {
    id: 'Administration',
    title: 'Administration',
    icon: <Settings />,
    children: [
      {
        id: 'Organizationsettings',
        title: 'Organization Settings',
        icon: <Settings />,
        navLink: '/administration/organizationsettings'
      },
      {
        id: 'Organization Settings',
        title: 'User Config',
        icon: <UserPlus />,
        navLink: '/administration/userconfig'
      },
      {
        id: 'Organization Settings',
        title: 'Email Config',
        icon: <Mail />,
        navLink: '/administration/emailconfig'
      },
      {
        id: 'Organization Settings',
        title: 'Roles',
        icon: <Users />,
        navLink: '/administration/roles'
      },
      {
        id: 'userlog',
        title: 'userlog',
        icon: <CheckSquare size={20} />,
        navLink: '/administration/userlog' 
      },
      {
        id: 'thirdparty',
        title: 'Third Party Integration',
        icon: <CheckSquare size={20} />,
        navLink: '/administration/thirdparty' 
      },
      {
        id: 'shop',
        title: 'Shop',
        icon: <Circle size={12} />,
        navLink: '/administration/shop'
      },
  {
    id: 'splunk',
    title: 'Splunk',
    icon: <Circle size={12} />,
    navLink: '/administration/splunk'
  },
  {
    id: 'qradar',
    title: 'Qradar',
    icon: <Circle size={12} />,
    navLink: '/administration/qradar'
  },
  {
    id: 'cheakpoint',
    title: 'Cheakpoint',
    icon: <Circle size={12} />,
    navLink: '/administration/cheakpoint'
  },
  {
    id: 'viewdetails',
    title: 'Details page',
    icon: <Circle size={12} />,
    navLink: '/administration/viewdetails'
  },
  {
    id: 'editdetails',
    title: 'Edit page',
    icon: <Circle size={12} />,
    navLink: '/administration/editdetails'
  },
  {
    id: 'rolesview',
    title: 'Role View',
    icon: <Circle size={12} />,
    navLink: '/administration/rolesview'
  },
  {
    id: 'rolesedit',
    title: 'Role Edit',
    icon: <Circle size={12} />,
    navLink: '/administration/rolesEdit'
  }
    ]
  }
     
]