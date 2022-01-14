// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, MapPin } from 'react-feather'
import { Row, Col, Button, Label, FormGroup, Form, Input } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvInput,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UserInfoTab = ({ stepper, type }) => {
  // ** States
  const [dob, setDob] = useState('')

  // ** Handles dob change
  const handledob = date => setDob(date)

  return (
    <AvForm onSubmit={e => e.preventDefault()}>
      <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`first-name-${type}`}>
              PAN
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='PAN' />
          </FormGroup>
           <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`last-name-${type}`}>
              GST
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='GST' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
          <Label for='inputFile'>Upload PAN</Label>
           <Input type='file' id='inputFile' name='fileInpur' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
          <Label for='inputFile'>Upload GST</Label>
           <Input type='file' id='inputFile' name='fileInpur' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`first-name-${type}`}>
              TAN
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='TAN' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`last-name-${type}`}>
              CIN
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='CIN' />
          </FormGroup>
     
        <Col className='d-flex flex-sm-row flex-column mt-2'>
          <Button type='submit' color='primary' className='mb-1 mb-sm-0 mr-0 mr-sm-1'>
            Save Changes
          </Button>
          <Button type='reset' color='secondary' outline>
            Reset
          </Button>
        </Col>
        </Row>
    </AvForm>
  )
}
export default UserInfoTab
