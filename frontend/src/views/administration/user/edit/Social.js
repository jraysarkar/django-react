import { useState, Fragment  } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus, User, ArrowRight, ArrowLeft  } from 'react-feather'

const RepeatingForm = ({ stepper, type }) => {
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <Fragment>
       <Form onSubmit={e => e.preventDefault()}>
        <Repeater count={count}>
          {i => (
            <Form key={i}>
              <Row className='justify-content-between align-items-center'>
              <FormGroup tag={Col} md='3'>
          <Label for='user-role'>Type of Sensor</Label>
          <Input type='select' id='user-role' name='user-role' required>
            <option value='subscriber'>Select Sensor type</option>
            <option value='editor'>Virtual Sensor</option>
            <option value='maintainer'>Cloud Sensor</option>
            <option value='author'>Both Virtual & Cloud Sensor</option>
          </Input>
        </FormGroup>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`cost-${i}`}>No. of Sensor</Label>
                    <Input type='number' id={`cost-${i}`} placeholder='32' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>Config IP Address</Label>
                    <Input type='text' id={`quantity-${i}`} placeholder='129.0.0.0' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>Config Port No</Label>
                    <Input type='number' id={`quantity-${i}`} placeholder='22' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>Location Address</Label>
                    <Input type='text' id={`quantity-${i}`} placeholder='India' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>City</Label>
                    <Input type='text' id={`quantity-${i}`} placeholder='gurugram' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>State, Provience or Region</Label>
                    <Input type='text' id={`quantity-${i}`} placeholder='Haryana' />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>Postal Code</Label>
                    <Input type='number' id={`quantity-${i}`} placeholder='122011' />
                  </FormGroup>
                </Col>
              
                <Col md={3}>
                  <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                  </Col>
                  <Col md={3}>
                  <Button.Ripple className= 'text-nowrap px-1' color='primary' onClick={increaseCount} outline>
          <Plus size={14} className='mr-50' />
          <span>Add New</span>
        </Button.Ripple>
        </Col>
                <Col sm={12}>
                  <hr />
                </Col>
                <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
          <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
            Save Changes
          </Button>
          <Button color='secondary' outline>
            Reset
          </Button>
        </Col>
              </Row>
            </Form>
            
          )}
        </Repeater>
        </Form>
      </Fragment>
  )
}

export default RepeatingForm
