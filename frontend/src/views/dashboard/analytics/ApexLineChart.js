import Chart from 'react-apexcharts'
import { Fragment, useState, useRef, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, Share, Printer, FileText, File, Grid, Copy, Calendar } from 'react-feather'
  import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, UncontrolledButtonDropdown, Row, Button,
    DropdownToggle, Modal, ModalHeader, ModalBody, FormGroup, Input, CustomInput, ModalFooter, Badge,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
    import axios from "axios"

const ApexLineChart = ({ direction, warning }) => {
  const [seriesData, setSeriesData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
   

  useEffect(() => {
    axios.get("http://localhost:3004/attack_Graph").then((res) => {
      // console.log(res)
      setSeriesData(res.data.series)
      setCategoriesData(res.data.categories)
    })
  }, [seriesData, categoriesData])     
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: [warning]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
      }
    },
   xaxis: {
      categories: categoriesData
    },
    
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      data: seriesData
    }
  ]
  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Last 12 Months Attack Graph
          </CardTitle>
          <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
          </div>
        <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
          <Badge color='light-secondary'>
          </Badge>
        </div>
        <Row className='justify-content-end mx-1'> 
        </Row>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={450} />
      </CardBody>
      
    </Card>
  )
}

export default ApexLineChart
