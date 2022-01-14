// ** Reactstrap
import { Card, CardHeader, CardTitle, CardText, Table, CustomInput } from 'reactstrap'

const PermissionsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Permissions</CardTitle>
      </CardHeader>
      <CardText className='ml-2'>Permission according to roles</CardText>
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
              <CustomInput type='checkbox' id='admin-1' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>Attacks</td>
            <td>
              <CustomInput type='checkbox' id='staff-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-2' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='staff-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>User Config</td>
            <td>
              <CustomInput type='checkbox' id='author-1' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='author-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='author-3' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='author-4' label='' disabled />
            </td>
          </tr>
         <tr>
            <td>Email Config</td>
            <td>
              <CustomInput type='checkbox' id='contributor-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='contributor-4' label='' disabled />
            </td>
         </tr>
          <tr>
            <td>Roles</td>
            <td>
              <CustomInput type='checkbox' id='user-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-4' label='' defaultChecked disabled />
            </td>
          </tr>
          <tr>
            <td>User Log</td>
            <td>
              <CustomInput type='checkbox' id='user-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='user-4' label='' defaultChecked disabled />
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

export default PermissionsTable
