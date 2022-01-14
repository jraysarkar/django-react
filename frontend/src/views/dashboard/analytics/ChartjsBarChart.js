import { Bar } from 'react-chartjs-2'
import { Fragment, useState, useRef, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, Share, Printer, FileText, File, Grid, Copy, Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, UncontrolledButtonDropdown, Row, Button,
  DropdownToggle, Modal, ModalHeader, ModalBody, FormGroup, Input, CustomInput, ModalFooter,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
  import axios from "axios"

const ChartjsBarChart = ({ tooltipShadow, gridLineColor, labelColor, successColorShade, lineChartPrimary, yellowColor}) => {
  const [seriesData, setSeriesData] = useState([])
  const [labelsData, setLabelsData] = useState([]) 

  useEffect(() => {
    axios.get("http://localhost:3004/Assets_Data").then((res) => {
      // console.log(res)
      setSeriesData(res.data.series)
      setLabelsData(res.data.labels)
    })
  }, [seriesData, labelsData])
  const options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            }
          }
        ]
      }
    },
    data = {
      // labels: ['Routers', 'Laptops', 'Phones', 'Subnet', 'Servers', 'Dummy', 'Dummy'],
      labels: labelsData,
      datasets: [
        {
          data: seriesData,
          backgroundColor: lineChartPrimary,
          borderColor: 'transparent',
          barThickness: 15
        }
      ]
    }


  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
      <div>
        <CardTitle className='mb-75' tag='h4'>Assets Data</CardTitle>
        <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
        </div>
        <Row className='justify-content-end mx-0'>
            <div className='d-flex align-items-center'>
          <Calendar size={17} />
          <Flatpickr
            options={{
              mode: 'range',
              defaultDate: ['2019-05-01', '2019-05-10']
            }}
            className='form-control flat-picker bg-transparent border-0 shadow-none'
          />
        </div>
        </Row>
        
      </CardHeader>
      <CardBody>
        <div style={{ height: '400px' }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
     
    </Card>
  )
}

export default ChartjsBarChart
