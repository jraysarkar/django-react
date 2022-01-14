// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media, Button } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: 'User ID: ABC123 logged in at:13:00:21 on 22/10/2021',
    content: 'Organization Name: ABC Pvt Ltd',
    meta: '12 min ago'
  },
  {
    title: 'User ID: EDGH456 add edit user role',
    content: 'Organization Name: ABC Pvt Ltd',
    meta: '45 min ago',
    color: 'warning'
  },
  {
    title: 'User ID: IJKL789 add a user user',
    content: 'Organization Name: ABC Pvt Ltd',
    meta: '1 hour ago'
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          User Logs
        </CardTitle> 
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
        <div className='text-center'>
            <Button.Ripple color='primary'>More Details</Button.Ripple>
          </div>
      </CardBody>
    </Card>
    
  )
}

export default UserTimeline
