import Avatar from '@components/avatar'
import { MoreVertical } from 'react-feather'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media,  DropdownMenu, UncontrolledDropdown,  DropdownToggle, Button, Row, Col,
  DropdownItem } from 'reactstrap'
  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
const CardTransactions2 = () => {
  const transactionsArr = [
    {
      title: 'Trojan Attack  ',
      color: 'light-danger',
      amount: '+74',
      Icon: Icon['Pocket'],
      down: true
     
    },
    {
      title: 'IoT Attack',
      color: 'light-danger',
      amount: '+480',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Office Macro Attack',
      color: 'light-danger',
      amount: '+590',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Phishing Attack',
      color: 'light-danger',
      amount: '+ 12',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Ransomware',
      color: 'light-danger',
      amount: '+ 98',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'SQL Injection Attack',
      color: 'light-danger',
      amount: '+ 98',
      Icon: Icon['Pocket'],
      down: true
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <Media>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
          <div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }
    // ** Function to handle Modal toggle
    const handleModal = () => setModal(!modal)

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Top 6 Attacks</CardTitle>
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
      <Row>
      <div className='d-inline-block ml-5 mb-1'>
            <Button.Ripple outline color='danger'>
              View More
            </Button.Ripple>
          </div>
        </Row>
    </Card>
  )
}

export default CardTransactions2
