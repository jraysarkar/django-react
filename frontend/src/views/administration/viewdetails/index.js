import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Details from './Details'

const Viewdetails = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <Details />
        </Col>
        <Col md='6' sm='12'>
         
        </Col>
      </Row>
    </Fragment>
  )
}
export default Viewdetails
