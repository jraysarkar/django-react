import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Cloud Senser </h5>
        <small className='text-muted'>Enter Your Cloud Senser Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
      <Row>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type} required`}>
              Reagon
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`text-${type}`}>
            VPC ID
            </Label>
            <Input
              type='text'
              name={`text-${type}`}
              id={`text-${type}`}
            />
          </FormGroup>
        <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            IPV4 CIDR
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <div className='col-md-3'>
            <Label>
            Rout Table ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </div>
        <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Network ACL
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Number of Subnets
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Subnet Id
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Subnet IPV4 CIDR
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  /> 
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Availibility Zone
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Availibility Zone ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Associate Rout Table ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            No of Internet Gateway
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            IGT ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Nat Gateway ( Yes/No)
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Nat Gateway ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Esactic IP Address
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Private IP
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Network Interface ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            NatGateway Subnate ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            CIRD Block
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
    </Row>
          {/*Transit gateway*/}
          <div classname='mr-2'>
        <h5 className='mb-0'>Transit gateway</h5>
        <small className='text-muted'>Enter Your Transit gateway Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
      <FormGroup tag={Col} md='4'>
            <Label className='content-header' for={`username-${type}`}>
            Transit Gateway Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Transit Gateway ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Transit Gateway ARN
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          </Row>
          {/*Traffic Mirror*/}
          <div className='content-header'>
        <h5 className='mb-0'>Traffic Mirror</h5>
        <small className='text-muted'>Enter Your Traffic Mirro Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
      <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Source ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Target ID
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
        </Row>
          {/*Network Load Balancer*/}
          <div className='content-header'>
        <h5 className='mb-0'>Network Load Balancer</h5>
        <small className='text-muted'>Enter Your Network Load Balancer Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
      <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            VPC
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            DNS Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
</Row>
         {/*Target Group*/}
          <div className='content-header'>
        <h5 className='mb-0'>Target Group</h5>
        <small className='text-muted'>Enter Your Target Group Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
      <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Target Type
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            VPC
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
            Load Balancer
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
            Protocol
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          </Row>
          {/*ECS (Elastic Container Service)*/}
          <div className='content-header'>
        <h5 className='mb-0'>ECS (Elastic Container Service)</h5>
        <small className='text-muted'>Enter Your ECS (Elastic Container Service) Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
                <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Cluster Type ( Fargate/ EC2/ External )
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Service Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`username-${type}`}>
            Target Group
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
            </Row>
             {/*S3*/}
             <div className='content-header'>
        <h5 className='mb-0'>S3</h5>
        <small className='text-muted'>Enter Your S3 Details.</small>
      </div>
      <Col sm={12}>
                  <hr />
                </Col>
                <Row>
                <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Bucket Name
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Bucket Region
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Bucket ARN
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
          </FormGroup>
          <FormGroup tag={Col} md='3'>
            <Label className='form-label' for={`username-${type}`}>
            Storage Type
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`}  />
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
    </Fragment>
  )
}

export default AccountDetails
