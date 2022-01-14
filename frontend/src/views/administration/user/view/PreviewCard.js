import { Card, Table, CardText } from 'reactstrap'
import { Fragment } from 'react'
import AppCollapse from '@components/app-collapse'
const data = [
  {
    title: 'Cloud Architech',
    content: (
      <CardText className='mb-0'>
<Table responsive>
<thead>
  <tr>
    <th className='py-1'>Cloud Architech Details</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
 
<tbody>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Reagon</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>VPC ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td> 
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>IPV4 CIDR</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Rout Table ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Network ACL</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Number of Subnets</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Subnet Id</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Availibility Zone</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Availibility Zone ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Associate Rout Table ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>No. of Internet Gateway</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>IGT ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Nat Gateway</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Nat Gateway ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Esactic IP Address</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Private IP</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Network Interface ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>NatGateway Subnate ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>CIRD Block</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
</tbody>
</Table>
      </CardText>
    )
  },
  {
    title: 'Transit Gateway',
    content: (
      <CardText className='mb-0'>
        <Table responsive>
        <thead>
  <tr>
    <th className='py-1'>Transit Gateway Details</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
     <tbody>
  <tr>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Transit Gateway Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Transit Gateway ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Transit Gateway ARN</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
      </CardText>
    )
  },
  {
    title: 'Traffic Mirror',
    content: (
      <CardText className='mb-0'>
        <Table responsive>
  <thead>
  <tr>
    <th className='py-1'>Traffic Mirror</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
<tbody>
<tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>ID Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Source ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Target ID</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
      </CardText>
    )
  },
  {
    title: 'Network Load Balancer',
    content: (
      <CardText className='mb-0'>
        <Table responsive>
    <thead>
  <tr>
    <th className='py-1'>Network Load Balancer</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
<tbody>
<tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>ID Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>VPC</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>DNS Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
  </CardText>
    )
  },
  {
    title: 'Target Group',
    content: (
      <CardText className='mb-0'>
         <Table responsive>
       <thead>
  <tr>
    <th className='py-1'>Target Group</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
<tbody>
<tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>ID Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Target Type</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>VPC</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Load Balancer</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Protocol</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
      </CardText>
    )
  },
  {
    title: 'Elastic Container Service',
    content: (
      <CardText className='mb-0'>
         <Table responsive>
  <thead>
  <tr>
    <th className='py-1'>ECS (Elastic Container Service)</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
<tbody>
<tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Cluster Type ( Fargate/ EC2/ External )</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Service Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Target Group</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
      </CardText>
    )
  },
  {
    title: 'AWS S3',
    content: (
      <CardText className='mb-0'>
         <Table responsive>
         <thead>
  <tr>
    <th className='py-1'>AWS S3 Details</th>
    <th className='py-1'>Value</th>
  </tr>
</thead>
<tbody>
<tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Bucket Name</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Bucket Region</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Bucket ARN</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  <tr className='border-bottom'>
    <td className='py-1'>
      <p className='card-text font-weight-bold mb-25'>Storage Type</p>
    </td>
    <td className='py-1'>
      <span className='font-weight-bold'>any</span>
    </td>
  </tr>
  </tbody>
  </Table>
      </CardText>
    )
  }
]

const Accordion = () => <AppCollapse data={data} accordion />

export default Accordion

