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
axios.get('http://127.0.0.1:8000/attack/').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
 
  {
    name: 'Org-ID',
    selector: 'org',
    sortable: true,
    minWidth: '200px'
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
    name: 'ID',
    selector: 'id',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Ans',
    selector: 'attack_asn',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack City',
    selector: 'attack_city',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Attack Code',
    selector: 'attack_country_code',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack Country',
    selector: 'attack_country',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'IP',
    selector: 'attack_ip',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'ISP',
    selector: 'attack_isp',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack',
    selector: 'attack_lat',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack ION',
    selector: 'attack_lon',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack Region',
    selector: 'attack_region_name',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack Class',
    selector: 'attack_threat_class',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Time Stamp',
    selector: 'attack_timestamp',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Time Zone',
    selector: 'attack_timezone',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack zip',
    selector: 'attack_zip',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Timestamp data',
    selector: 'data_input_timestamp',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Data id',
    selector: 'data_source_id',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Data source',
    selector: 'data_source_type',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack Threat',
    selector: 'attack_threat_type',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'ORG ID',
    selector: 'org_id',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Location',
    selector: 'org_location',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target OS',
    selector: 'target_os',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target City',
    selector: 'target_city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target Country',
    selector: 'target_country',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target ID',
    selector: 'target_id',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target IP',
    selector: 'target_ip',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target address',
    selector: 'target_mac_address',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target region',
    selector: 'target_region',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target status',
    selector: 'target_status',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target type',
    selector: 'target_type',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Target inside',
    selector: 'is_inside_threat',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack OS',
    selector: 'attack_os',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Attack Severity',
    selector: 'attack_threat_severity',
    sortable: true,
    minWidth: '150px'
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
    minWidth: '300px'
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