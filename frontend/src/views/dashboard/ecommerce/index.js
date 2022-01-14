import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
/*import ChartjsLineChart from './ChartjsLineChart'*/
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import TableWithButtons from './TableWithButtons'
import Breadcrumbs from '@components/breadcrumbs'
import ApexColumnCharts from './attacks_barchart'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'
import PolarAreaChart from './top_attackIP_polarchart'
import { useSkin } from '@hooks/useSkin'
import HorizontalBarChart from './ChartjsHorizontalBar'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
  [skin, setSkin] = useSkin(),
  tooltipShadow = 'rgba(0, 0, 0, 0.25)',
  labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
  gridLineColor = 'rgba(200, 200, 200, 0.2)',
  lineChartPrimary = '#ffe700',
  lineChartDanger = '#00d4bd',
  warningColorShade = '#826bf8',
  greencolor = '#2b9bf4',
  Dodgerbulecolor = '#FFA1A1',
  greycolor = '#008000',
  blackcolor = '#000000',
  Darkredcolor = '#a80d1d',
  Strongcyancolor = '#0db8a1',
  redcolor = '#ec170f',
  mostlypurecolor = '#ee00ff',
  warningLightColor = '#FDAC34',
  successColorShade = '#28dac6',
  primaryColorShade = '#836AF9',
  infoColorShade = '#299AFF',
  yellowColor = '#ffe800',
  greyColor = '#4F5D70',
  blueColor = '#2c9aff',
  blueLightColor = '#84D0FF',
  greyLightColor = '#EDF1F4'
  
  return (
    <div id='dashboard-ecommerce'>
      <Col sm='14'>
          <ApexColumnCharts primary={colors.primary.main} />
        </Col> 
        <Row>
        <Col sm='12'>
      <TableWithButtons />
        </Col>
        </Row>
        <Row className='match-height'>
        <Col lg='6' sm='12'>
          <PolarAreaChart
            primary={colors.primary.main}
            labelColor={labelColor}
            primaryColorShade={primaryColorShade}
            warningColorShade={warningColorShade}
            infoColorShade={infoColorShade}
            greyColor={greyColor}
            successColorShade={successColorShade}
            tooltipShadow={tooltipShadow}
          />
        </Col>
        <Col xl='6' sm='9'>
          <HorizontalBarChart
            info={colors.info.main}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        </Row>
        
      </div>
  )
}

export default EcommerceDashboard
