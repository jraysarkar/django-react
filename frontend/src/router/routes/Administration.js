import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
const DashboardRoutes = [
  // Dashboards
  {
    path: '/administration/organizationsettings',
    component: lazy(() => import('../../views/administration/organizationsettings'))
  },
  {
    path: '/administration/user/view',
    exact: true,
    component: () => <Redirect to='/administration/user/view/1' />
  },
  {
    path: '/administration/user/view/:id',
    component: lazy(() => import('../../views/administration/user/view')),
    meta: {
      navLink: '/administration/user/view'
    }

  },
  {
    path: '/administration/user/edit',
    exact: true,
    component: () => <Redirect to='/administration/user/edit/1' />
  },
  {
    path: '/administration/user/edit/:id',
    component: lazy(() => import('../../views/administration/user/edit')),
    meta: {
      navLink: '/administration/user/edit'
    }
  },
  {
    path: '/administration/userconfig',
    component: lazy(() => import('../../views/administration/userconfig')),
    exact: true
  },
  {
    path: '/administration/userconfig/user/list',
    component: lazy(() => import('../../views/administration/userconfig/user/list'))
  },
  {
    path: '/administration/userconfig/user/edit',
    exact: true,
    component: () => <Redirect to='/administration/userconfig/user/edit/1' />
  },
  {
    path: '/administration/userconfig/user/edit/:id',
    component: lazy(() => import('../../views/administration/userconfig/user/edit')),
    meta: {
      navLink: '/administration/userconfig/user/edit'
    }
  },
  {
    path: '/administration/userconfig/user/view',
    exact: true,
    component: () => <Redirect to='/administration/userconfig/user/view/1' />
  },
  {
    path: '/administration/userconfig/user/view/:id',
    component: lazy(() => import('../../views/administration/userconfig/user/view')),
    meta: {
      navLink: '/administration/userconfig/user/view'
    }
  },
  {
    path: '/administration/emailconfig',
    component: lazy(() => import('../../views/administration/emailconfig')),
    exact: true
  },
  {
    path: '/administration/userlog',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/administration/userlog'))
  },
  {
    path: '/administration/userlog/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/administration/userlog')),
    meta: {
      navLink: '/administration/userlog'
    }
  },
  {
    path: '/administration/userlog/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/administration/userlog')),
    meta: {
      navLink: '/administration/userlog'
    }
  },
  {
    path: '/administration/userlog/:filter',
    component: lazy(() => import('../../views/administration/userlog')),
    meta: {
      navLink: '/administration/userlog'
    }
  },
  {
    path: '/administration/account-settings',
    component: lazy(() => import('../../views/administration/account-settings'))
  },
  {
    path: '/administration/thirdparty',
    component: lazy(() => import('../../views/administration/thirdparty'))
  },
  {
    path: '/administration/roles',
    component: lazy(() => import('../../views/administration/roles'))
  }, {
    path: '/administration/permission',
    exact: true,
    component: () => <Redirect to='/administration/permission/1' />
  },
  {
    path: '/administration/permission/:id',
    component: lazy(() => import('../../views/administration/permission')),
    meta: {
      navLink: '/administration/permission'
    }
  },
  {
    path: '/administration/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/administration/shop'))
  },
 
  {
    path: '/administration/splunk',
    component: lazy(() => import('../../views/administration/splunk'))
  },
  {
    path: '/administration/qradar',
    component: lazy(() => import('../../views/administration/qradar'))
  },
  {
    path: '/administration/cheakpoint',
    component: lazy(() => import('../../views/administration/cheakpoint'))
  },
  {
    path: '/administration/viewdetails',
    component: lazy(() => import('../../views/administration/viewdetails'))
  },
  {
    path: '/administration/editdetails',
    component: lazy(() => import('../../views/administration/editdetails'))
  },
  {
    path: '/administration/rolesview',
    exact: true,
    component: () => <Redirect to='/administration/rolesview/1' />
  },
  {
    path: '/administration/rolesview/:id',
    component: lazy(() => import('../../views/administration/rolesview')),
    meta: {
      navLink: '/administration/rolesview'
    }
  },
  {
    path: '/administration/rolesedit',
    exact: true,
    component: () => <Redirect to='/administration/rolesedit/1' />
  },
  {
    path: '/administration/rolesedit/:id',
    component: lazy(() => import('../../views/administration/rolesedit')),
    meta: {
      navLink: '/administration/rolesedit'
    }
  }
]

export default DashboardRoutes