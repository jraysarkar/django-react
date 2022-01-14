import { useEffect, useState } from 'react'
import axios from 'axios'
import { MoreVertical } from 'react-feather'
import { Card, Row, CardTitle, Col, DropdownMenu, UncontrolledDropdown,  DropdownToggle, DropdownItem, CardSubtitle } from 'reactstrap'
import Chart from 'react-apexcharts'

const RevenueReport = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue-report').then(res => setData(res.data))
  }, [])

  const [assetsData, setAssetsData] = useState([])
  const [attacksData, setAttacksData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
   

  useEffect(() => {
    axios.get("http://localhost:3004/Assets_Attacks").then((res) => {
      // console.log(res)
      setAssetsData(res.data.assets)
      setAttacksData(res.data.attacks)
      setCategoriesData(res.data.categories)
    })
  }, [assetsData, categoriesData, attacksData])

  const revenueOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: false }
        }
      },
      xaxis: {
        categories: categoriesData,
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          endingShape: 'rounded'
        },
        distributed: true
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        }
      }
    },
    revenueSeries = [
      {
        name: 'Assets',
        data: assetsData
      },
      {
        name: 'Attack',
        data: attacksData
      }
    ]


  return data !== null ? (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='12' xs='24'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
          <div>
          <CardTitle className='mb-75' tag='h4'>Attack Vs Assets</CardTitle>
        <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
        </div>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center mr-2'>
                <span className='bullet bullet-primary mr-50 cursor-pointer'></span>
                <span>Assets</span>
                
              </div>
              <div className='d-flex align-items-center mr-2'>
                <span className='bullet bullet-warning mr-50 cursor-pointer'></span>
                <span>Attacks</span>
                </div>
                
                <UncontrolledDropdown>
          <DropdownToggle className='cursor-pointer' tag='span'>
            <MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem className='w-100'>Last 30 minutes Data</DropdownItem>
            <DropdownItem className='w-100'>Last 1 hour Data</DropdownItem>
            <DropdownItem className='w-100'>Today's Data</DropdownItem>
            <DropdownItem className='w-100'>Last 3 Days Data</DropdownItem>
            <DropdownItem className='w-100'>Last 7 Days Data</DropdownItem>
            <DropdownItem className='w-100'>Last 1 Month Data</DropdownItem>
            <DropdownItem className='w-100'>Last 6 Months Data</DropdownItem>
            <DropdownItem className='w-100'>Last 1 year Data</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
             
            </div>
          </div>
          <Chart id='revenue-report-chart' type='bar' height='370' options={revenueOptions} series={revenueSeries} />
        </Col>
        
      </Row>
    </Card>
  ) : null
}

export default RevenueReport