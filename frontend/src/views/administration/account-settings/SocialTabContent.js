import { Fragment, useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Select from 'react-select'
import { ArrowLeft, ArrowRight, ArrowsssRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import { Label, FormGroup, Row, Col, Form, Input, Button } from 'reactstrap'
import InputPasswordToggle from '@components/input-password-toggle'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

import '@styles/react/libs/react-select/_react-select.scss'

const Integation = ({ stepper, type }) => {
  const [password, setPassword] = useState('')
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>API Integration</h5>
        <small>Add API Details</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
      <Form onSubmit={e => e.preventDefault()}>
           <Row>
           <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`first-name-${type}`}>
              Org. ID
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='Org. ID' />
          </FormGroup>
           <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`last-name-${type}`}>
              API Key
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='Add API Key' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`first-name-${type}`}>
              API Password
            </Label>
            <InputPasswordToggle
                  required
                  value={password}
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  placeholder='API Password'
                  onChange={e => setPassword(e.target.value)}
                />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`last-name-${type}`}>
              Shared Secret Key 
            </Label>
            <InputPasswordToggle
                  required
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  placeholder='Shared Secret Key'
                />
          </FormGroup>
          </Row>
          <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default Integation
