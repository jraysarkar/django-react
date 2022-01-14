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
        <CardTitle tag='h4'>Splunk Form</CardTitle>
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
                <Label for='nameVertical'>Api Key</Label>
                <Input type='name' name='name' id='nameVertical' placeholder='Api Key' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <Label for='nameVertical'>API Password</Label>
                <Input type='name' name='text' id='nameVertical' placeholder='API Password' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
              <Label for='nameVertical'>Shared Secret Key</Label>
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
