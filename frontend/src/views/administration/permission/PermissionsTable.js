// ** Reactstrap
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardSubtitle, Table, CustomInput, Col, Button, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledButtonDropdown, Row, Label } from 'reactstrap'
const colourOptions = [
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Network Admin', label: 'Network Admin' },
  { value: 'Security Admin', label: 'Security Admin' }
]
const PermissionsTable = () => {
  return (
    <Card>
         <CardHeader>
        <div>
          <CardTitle className='mb-75' tag='h2'>
          Permissions
          </CardTitle>
          <CardSubtitle className='text-muted'>Permission according to roles</CardSubtitle>
          </div>
            
            <Col className='mb-0 mt-0' md='2' sm='2'>
            <Label>Roles</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
        
        
      </CardHeader>
      <Table striped borderless responsive>
        <thead className='thead-light'>
          <tr>
            <th>Module</th>
            <th>View</th>
            <th>Add</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dashboard</td>
            <td>
              <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Attacks</td>
            <td>
              <CustomInput type='checkbox' id='staff-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Assets</td>
            <td>
              <CustomInput type='checkbox' id='admi-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admi-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admi-3' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='admi-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Organization Settings</td>
            <td>
              <CustomInput type='checkbox' id='admn-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admn-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admn-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='admn-4' label='' defaultChecked />
            </td>
          </tr>
          <tr>
            <td>User Config</td>
            <td>
              <CustomInput type='checkbox' id='authr-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='authr-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='authr-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='authr-4' label='' defaultChecked />
            </td>
          </tr>
         <tr>
            <td>Email Config</td>
            <td>
              <CustomInput type='checkbox' id='contributor-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-3' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-4' label='' />
            </td>
         </tr>
          <tr>
            <td>Roles</td>
            <td>
              <CustomInput type='checkbox' id='user-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-2' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-4' label='' />
            </td>
          </tr>
          <tr>
            <td>User Log</td>
            <td>
              <CustomInput type='checkbox' id='ser-1' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='ser-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='ser-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='ser-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Third Party Integration</td>
            <td>
              <CustomInput type='checkbox' id='uer-1' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='uer-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='uer-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='uer-4' label='' />
            </td>
          </tr>
          <tr>
            <td>FQA</td>
            <td>
              <CustomInput type='checkbox' id='usr-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='usr-2' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='usr-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='usr-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Knowledge Base</td>
            <td>
              <CustomInput type='checkbox' id='use-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='use-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='use-3' label=''defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='use-4' label='' />
            </td>
          </tr>
          <tr>
            <td>Edit Account</td>
            <td>
              <CustomInput type='checkbox' id='auser-1' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='auser-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='auser-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='auser-4' label='' defaultChecked />
            </td>
          </tr>
          <tr>
            <td>Blling Settings</td>
            <td>
              <CustomInput type='checkbox' id='buser-1' label='' defaultChecked />
            </td>
            <td>
              <CustomInput type='checkbox' id='buser-2' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='buser-3' label='' />
            </td>
            <td>
              <CustomInput type='checkbox' id='buser-4' label='' />
            </td>
          </tr> 
        </tbody>
      </Table> 
      <th>
      <div className='float-right mr-1 mb-2 mt-2'>
    
          <Button.Ripple color='primary' className='btn-next'>
        
            <span className='align-middle d-sm-inline-block d-none'>Submit</span>
            
          </Button.Ripple>
        </div>
        </th> 
    </Card>
  )
}

export default PermissionsTable
