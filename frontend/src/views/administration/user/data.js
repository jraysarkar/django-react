// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash,  Trash2 } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Asset Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Asset Type',
    selector: 'email',
    sortable: true,
    minWidth: '310px'
  },
  {
    name: 'Asset ID',
    selector: 'Source IP',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Location',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Country',
    selector: 'salary',
    sortable: true,
    minWidth: '175px'
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
    name: 'Asset Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Asset Type',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Asset ID',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Source IP',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Location',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Country',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
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
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
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
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
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
    name: 'User name',
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
    name: 'Organization Id',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'User Role',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Status',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Actions',
    minWidth: '100px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/administration/user/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Views</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/administration/user/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Disable</span>
          </DropdownItem>
          <DropdownItem className='w-100'>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Enable</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
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
