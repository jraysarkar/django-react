// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status2 = {
  1: { title: 'Offline', color: 'light-primary' },
  2: { title: 'Active', color: 'light-success' },
  3: { title: 'Compromised', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Vulnerable', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
 
  {
    name: 'Org-ID',
    selector: 'org_id',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'ASSETS NAME',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'ASSET TYPE',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'ASSET ID',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'SOURCE IP',
    selector: 'age',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'LOCATION',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'COUNTRY',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status2',
    selector: 'status2',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status2[row.status2].color} pill>
          {status2[row.status2].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='align-middle ml-50 pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]
 
// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'ORG-ID',
    selector: 'org_id',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        {/*{row.avatar === '' ? (
          <Avatar color={`light-${states[row.status2]}`} content={row.org_id} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}*/}
        <div className='user-info text-truncate ml-0'>
          <span className='d-block font-weight-bold text-truncate'>{row.org_id}</span>
          {/*<small>{row.post}</small>*/}
        </div>
      </div>
    )
  },
  {
    name: 'ASSETS NAME',
    selector: 'asset_name',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'ASSET TYPE',
    selector: 'asset_type',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'ASSET ID',
    selector: 'asset_id',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'SOURCE IP',
    selector: 'source_ip',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'SLOCATION',
    selector: 'source_location',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'COUNTRY',
    selector: 'source_country',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status',
    selector: 'status2',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status2[row.status].color} pill>
          {status2[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='align-middle ml-50 pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Status2',
    selector: 'status2',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status2[row.status].color} pill>
          {status2[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    name: 'Full Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Office',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Start Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Post',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'City',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '100px'
  }
]

export default ExpandableTable