import { Fragment, useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import { Label, FormGroup, Row, Col, Form, Input, Button } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const BillingDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Statutory Details</h5>
        <small>Enter Statutory Details Info.</small>
      </div>
          <Form onSubmit={e => e.preventDefault()}>
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
          </Row>
          <Row>
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
         
          </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default BillingDetails
