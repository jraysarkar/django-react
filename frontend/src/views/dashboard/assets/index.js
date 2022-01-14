import { Row, Col } from 'reactstrap'
/*import ChartjsLineChart from './ChartjsLineChart'*/
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'
import TableWithButtons from './TableWithButtons'

const EcommerceDashboard = () => {
  
  return (
    <div id='dashboard-ecommerce'>
        <Col sm='13'>
      <TableWithButtons />
        </Col>
        
      </div>
  )
}

export default EcommerceDashboard
