import Chart from 'react-apexcharts'
import { Fragment, useState, useRef, useEffect } from 'react'
import { MoreVertical } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
  import axios from "axios"

const ApexRadialbar = () => {
  const [seriesData, setSeriesData] = useState([])
  const [labelsData, setLabelsData] = useState([])
   

  useEffect(() => {
    axios.get("http://localhost:3004/top_7_attacked").then((res) => {
      // console.log(res)
      setSeriesData(res.data.series)
      setLabelsData(res.data.labels)
    })
  }, [seriesData, labelsData])
  const donutColors = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
    series6: '#008000',
    series7: '#242926'
    
  }

  const options = {
    colors: [donutColors.series1, donutColors.series2, donutColors.series3, donutColors.series4, donutColors.series5, donutColors.series6, donutColors.series7],
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: '15%'
        },
        track: {
          margin: 15
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            fontFamily: 'Montserrat'
          },
          value: {
            fontSize: '1rem',
            fontFamily: 'Montserrat'
          },
          total: {
            show: true,
            fontSize: '1rem',
            label: 'USA',
            formatter(w) {
              return '30%'
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -17
      }
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    stroke: {
      lineCap: 'round'
    },
    // labels: ['China', 'India', 'Africa', 'Australia', 'Japan', 'USA', 'Canada']
    labels: labelsData
  }
  // const series = [85, 93, 50, 80, 33, 100, 30]
  const series = seriesData

  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
        <CardTitle className='mb-75' tag='h4'>Top 7 Attacked Country</CardTitle>
        <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
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
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='radialBar' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexRadialbar
