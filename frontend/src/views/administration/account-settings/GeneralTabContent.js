import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Basic Details</h5>
        <small className='text-muted'>Enter Your Basic Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
              Organization Full Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='Whizhack' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`email-${type}`}>
            Organization Email Address 
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='Whizhack@email.com'
              aria-label='john.doe'
            />
          </FormGroup>
        <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
            Organization Phone Number 
            </Label>
            <Input name='contact' id='contact' placeholder='(397) 294-5153' required />
          </FormGroup>
          <div className='col-md-6'>
            <Label>
            Company Registered Business Address 
            </Label>
            <Input name='business address' id='address' placeholder='Address' required />
          </div>
        <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
            City State, Provience or Region 
            </Label>
            <Input name='city' id='city' placeholder='City or state' required />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
            Postal Code
            </Label>
            <Input name='code' id='code' placeholder='122011' required />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
          <Label for='user-role'>Country or Region </Label>
          <Input type='select' id='user-role' name='user-role' required>
            <option value='subscriber'>INDIA</option>
            <option value='editor'>USA</option>
            <option value='maintainer'>CANADA</option>
            <option value='author'>ICELAND</option>
            <option value='admin'>BANGLADESH</option>
          </Input>
        </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
