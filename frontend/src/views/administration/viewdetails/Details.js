import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'

const Details = ({ data }) => {
    return (
    <Table responsive>
  
<tr>
<th className='py-1'>Splunk Details</th>
<th className='py-1'>Value</th>
</tr>
 <tbody>
<tr>
<td className='py-1'>
  <p className='card-text font-weight-bold mb-25'>Org.ID</p>
</td>
<td className='py-1'>
  <span className='font-weight-bold'>any</span>
</td>
</tr>
<tr>
<td className='py-1'>
  <p className='card-text font-weight-bold mb-25'>Api Key</p>
</td>
<td className='py-1'>
  <span className='font-weight-bold'>any</span>
</td>
</tr>
<tr>
<td className='py-1'>
  <p className='card-text font-weight-bold mb-25'>API Password</p>
</td>
<td className='py-1'>
  <span className='font-weight-bold'>any</span>
</td>
</tr>
<tr>
<td className='py-1'>
  <p className='card-text font-weight-bold mb-25'>Shared Secret Key</p>
</td>
<td className='py-1'>
  <span className='font-weight-bold'>any</span>
</td>
</tr>
</tbody>
</Table>
    )
}
export default Details 