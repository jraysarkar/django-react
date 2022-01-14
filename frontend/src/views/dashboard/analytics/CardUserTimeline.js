import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import { List, MoreVertical } from 'react-feather'
import jsonImg from '@src/assets/images/icons/json.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'


const avatarGroupArr = [
  {
    title: 'Billy Hopkins',
    img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Amy Carson',
    img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Brandon Miles',
    img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Daisy Weber',
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Jenny Looper',
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  }
]

const data = [
  {
    title: 'On premise Sensor No.2 of Clint ABC is not working',
    content: 'If sensor not working than we have to ping notification to users',
    meta: '12 min ago',
    color: 'danger',
    metaClassName: 'mr-1'
    
  },
  {
    title: 'Cloud Sensor or VPC id: 1442GG of client EFG is not working',
    content: 'Misbehave Sensors ',
    meta: '3 min ago',
    metaClassName: 'mr-1',
    color: 'secondary'
  },
  {
    title: 'Asset ID: 123 with MAC:1231231 with IP:682681 is having Rog Behaviour',
    content: 'Asset Rog behavior',
    color: 'warning',
    meta: '2 days ago',
    metaClassName: 'mr-1'
  },
  {
    title: 'Asset ID: 123 with MAC:1231231 with IP:682681 is Under Attack',
    content: 'If assets under attack than we have to ping notification in this case ',
    color: 'danger',
    meta: '2 days ago',
    metaClassName: 'mr-1'
  }
  
]

const UserTimeline = () => {
  return (
    <Card className='card-user-timeline'>
      <CardHeader>
        <div className='d-flex align-items-center'>
          <List className='user-timeline-title-icon' />
          <CardTitle tag='h4'>Notifications</CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <Timeline className='ml-50 mb-0' data={data} />
      </CardBody>
      <Button className='mr-5 ml-5' color='primary'>
     <span>View More</span>
   </Button>
    </Card>
  )
}

export default UserTimeline
