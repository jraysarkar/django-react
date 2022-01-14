// ** Reactstrap
import { Card, CardHeader, CardBody, Row, Col, CardText } from 'reactstrap'

const PlanCard = ({ selectedUser }) => {
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Statutory Details</h5>
      </CardHeader>
      <CardBody>
        <Row>
      <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center my-100'>
                <div className='user-info-title'>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                  PAN
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedUser !== null ? selectedUser.PAN : 'eleanor.aguilar'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    GST
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.GST : 'England'}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    CIN
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.CIN : 'England'}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    TAN
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.TAN : 'England'}</CardText>
              </div>
               
            </div>
          </Col>
        </Row> 
      </CardBody>
    </Card>
  )
}

export default PlanCard
