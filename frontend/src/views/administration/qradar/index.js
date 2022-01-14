import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import VerticalForm from './VerticalForm'
import HorizontalForm from './HorizontalForm'

const Splunk = () => {
  return (
    <Fragment>
      <Row>
        <Col md='6' sm='12'>
          <HorizontalForm />
        </Col>
        <Col md='6' sm='12'>
          <VerticalForm />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Splunk
