import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
import img1 from '@src/assets/images/pages/eCommerce/download.jpg'

const HorizontalForm = () => {
  return (
    <Card>
      <img src={img1} ml='20' width="150px" height="150px"/>
      <CardHeader>
        <CardTitle tag='h4'>Splunk Details</CardTitle>
      </CardHeader>

      <CardBody>
      <p><b> Step 1:</b>&ensp; For Developer’s Access:</p>

      <p><b> Step 2:</b>&ensp; Go to https://developer.amazonservices.in</p> 
      <p><b> Step 3:</b>&ensp; Log into your Amazon seller account</p>
       <p><b> Step 4:</b>&ensp; The heading Third-Party Developer and Apps can be found the user permissions screen. This is &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;where the you have to click on Visit Manage your Apps.</p>
       <p><b> Step 5:</b>&ensp; Make sure that you enter the credentials as following:</p>
       <p><b> Step 6:</b>&ensp; Developer’s Name: KartRocket</p>
       <p><b> Step 7:</b>&ensp; Developer Account Number: 1469-7463-9584</p>
        {/*<Form>
          <FormGroup row>
            <Label sm='3' for='name'>
              First Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='First Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Email'>
              Email
            </Label>
            <Col sm='9'>
              <Input type='email' name='Email' id='Email' placeholder='Email' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='mobile'>
              Mobile
            </Label>
            <Col sm='9'>
              <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='password'>
              Password
            </Label>
            <Col sm='9'>
              <Input type='password' name='password' id='password' placeholder='Password' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me' label='Remember Me' defaultChecked={false} />
            </Col>
          </FormGroup>

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <div className='mr-1'>
                <Button.Ripple color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
              </div>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>*/}
      </CardBody>
    </Card>
  )
}
export default HorizontalForm
