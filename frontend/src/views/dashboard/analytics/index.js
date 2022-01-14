import { useContext } from 'react'
//import { List } from 'react-feather'
import { kFormatter } from '@utils'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import InvoiceList from '@src/views/apps/invoice/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import DoughnutChart from './ChartjsDoughnutChart'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import CardTransactions from './CardTransactions'
import BarChart from './ChartjsBarChart'
import RevenueReport from './RevenueReport'
import ApexLineChart from './ApexLineChart'
import CardUserTimeline from './CardUserTimeline'
import ApexRadialBarChart from './ApexRadialbar'
import TableZeroConfig from './TableZeroConfig'
import TableWithButtons from './TableWithButtons'
import PolarAreaChart from './ChartjsPolarAreaChart'

import '@styles/react/libs/charts/apex-charts.scss'

const AttacksDashboard = () => {
  const { colors } = useContext(ThemeColors),
  labelColor = 'dark' ? '#b4b7bd' : '#6e6b7b',
  tooltipShadow = 'rgba(0, 0, 0, 0.25)',
  gridLineColor = 'rgba(200, 200, 200, 0.2)',
  lineChartPrimary = '#666ee8',
  lineChartDanger = '#ff4961',
  warningColorShade = '#ffe802',
  warningLightColor = '#FDAC34',
  successColorShade = '#28dac6',
  primaryColorShade = '#836AF9',
  infoColorShade = '#299AFF',
  yellowColor = '#ffe800',
  greyColor = '#4F5D70',
  Redcolor = '#FF0000',
  blueColor = '#2c9aff',
  blueLightColor = '#84D0FF',
  greyLightColor = '#EDF1F4'
  const avatarGroupArr = [
    {
      title: 'Billy Hopkins',
      img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      placement: 'bottom',
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Amy Carson',
      img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
      placement: 'bottom',
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Brandon Miles',
      img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
      placement: 'bottom',
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Daisy Weber',
      img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      placement: 'bottom',
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Jenny Looper',
      img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
      placement: 'bottom',
      imgHeight: 33,
      imgWidth: 33
    }
  ],
  data = [
    {
      title: '12 Invoices have been paid',
      content: 'Invoices have been paid to the company.',
      meta: '',
      metaClassName: 'mr-1',
      customContent: (
        <Media>
          <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
          <Media className='mb-0' body>
            data.json
          </Media>
        </Media>
      )
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '',
      metaClassName: 'mr-1',
      color: 'warning',
      customContent: (
        <Media className='align-items-center'>
          <Avatar img={ceo} />
          <Media className='ml-50' body>
            <h6 className='mb-0'>John Doe (Client)</h6>
            <span>CEO of Infibeam</span>
          </Media>
        </Media>
      )
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'info',
      meta: '',
      metaClassName: 'mr-1',
      customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'danger',
      meta: '',
      metaClassName: 'mr-1'
    }
  ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
      <Col lg='5' md='3' xs='12'>
          <DoughnutChart
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            warningLightColor={warningLightColor}
            primary={colors.primary.main}
          />
        </Col>
        <Col lg='3' md='3' xs='10'>
          <PolarAreaChart
            primary={colors.primary.main}
            labelColor={labelColor}
            primaryColorShade={primaryColorShade}
            warningColorShade={warningColorShade}
            infoColorShade={infoColorShade}
            greyColor={greyColor}
            successColorShade={successColorShade}
            tooltipShadow={tooltipShadow}
            Redcolor={Redcolor }
          />
        </Col>
        <Col lg='4' md='3' xs='10'>
          <ApexRadialBarChart />
        </Col>
      </Row>
      <Row className='match-height'>
      <Col lg='6' md='4' xs='10'>
          <BarChart
            successColorShade={successColorShade}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
            lineChartPrimary={lineChartPrimary}
            yellowColor={yellowColor}
          />
        </Col>
        <Col lg='6' md='4' xs='16'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
        </Row>
      <Row className='match-height'>
      <Col lg='6' md='4' xs='16'>
          <ApexLineChart primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
        <Col lg='6' md='4' xs='16'>
      <TableWithButtons />
        </Col>
      </Row>
    </div>
  )
}

export default AttacksDashboard
