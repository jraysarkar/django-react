import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput
} from 'reactstrap'

const VerticalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Qradar Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              <FormGroup>
              <Label for='NameVertical'>Org.ID</Label>
                <Input type='name' name='name' id='nameVertical' placeholder='Org.ID' />
              </FormGroup> 
            </Col>
            <Col sm='12'>
              <FormGroup>
                <Label for='EmailVertical'>Api Key</Label>
                <Input type='name' name='name' id='nameVertical' placeholder='Api Key' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <Label for='mobileVertical'>API Password</Label>
                <Input type='number' name='mobile' id='mobileVertical' placeholder='API Password' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
              <Label for='EmailVertical'>Shared Secret Key</Label>
                <Input type='name' name='name' id='nameVertical' placeholder='Shared Secret Key' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <CustomInput type='checkbox' id='remember-me-vertical' label='Remember Me' defaultChecked={false} />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <div className='mr-1'>
                  <Button.Ripple color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                  </Button.Ripple>
                </div>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default VerticalForm
