import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText, Button, CardHeader, CardTitle } from 'reactstrap'
// ** User List Component
import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'

const OrganizationsettingsAdministration = () => {

  return (
    <Fragment>
      {/*<Breadcrumbs breadCrumbTitle='Reactstrap Tables' breadCrumbParent='Forms & Tables' breadCrumbActive='Tables' />*/}
      <Col lg='13' md='14' xs='24'>
      <div className='app-user-list'>
      <Table />
    </div>
      </Col>
    </Fragment>
  )
}

export default OrganizationsettingsAdministration
