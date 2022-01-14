import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      id: 1,
      fullName: 'asfsaf',
      company: 'Yotz PVT LTD',
      role: 'editor',
      username: 'Super Admin',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'author',
      username: 'Network Admin',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'team',
      status: 'pending',
      appname: 'Qreader',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'Super Admin',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      appname: 'CheckPoint',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'Super Admin',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      currentPlan: 'team',
      status: 'inactive',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'subscriber',
      username: 'Security Admin',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      currentPlan: 'enterprise',
      status: 'pending',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'author',
      username: 'Network Admin',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      currentPlan: 'company',
      status: 'active',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: ''
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'subscriber',
      username: 'Super Admin',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      currentPlan: 'company',
      status: 'pending',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: ''
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'editor',
      username: 'Super Admin',
      country: 'China',
      contact: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      currentPlan: 'company',
      status: 'active',
      appname: 'Splunk',
      creationdate: '2021-11-09',
      organizationid: 'whizhack',
      avatar: require('@src/assets/images/avatars/9.png').default
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      users: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})
