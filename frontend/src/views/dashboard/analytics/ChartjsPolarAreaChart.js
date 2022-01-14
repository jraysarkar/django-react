import { Polar } from 'react-chartjs-2'
import { MoreVertical } from 'react-feather'
import { Fragment, useState, useRef, useEffect } from 'react'
import axios from "axios"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardSubtitle
} from 'reactstrap'

const ChartjsPolarAreaChart = ({
  primary,
  labelColor,
  primaryColorShade,
  warningColorShade,
  Redcolor,
  infoColorShade,
  greyColor,
  successColorShade,
  tooltipShadow
}) => {
  const [seriesData, setSeriesData] = useState([])
  const [labelsData, setLabelsData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3004/Malware").then((res) => {
      // console.log(res)
      setSeriesData(res.data.series)
      setLabelsData(res.data.labels)
    })
  }, [seriesData, labelsData]) 

  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,

      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 26,
          boxWidth: 5,
          fontColor: labelColor
        }
      },
      layout: {
        padding: {
          top: -10,
          bottom: -45
        }
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
      scale: {
        scaleShowLine: true,
        scaleLineWidth: 1,
        ticks: {
          display: false,
          fontColor: labelColor
        },
        reverse: false,
        gridLines: {
          display: false
        }
      },
      animation: {
        animateRotate: false
      }
    },
    data = {
      // labels: ['Trojan', 'IoT', 'Office Macro', 'Phishing', 'Ransomware', 'SQL Injection', 'Rootkits'],
      labels: labelsData,
      datasets: [
        {
          label: 'labelsData',
          backgroundColor: [
            primaryColorShade,
            warningColorShade,
            primary,
            infoColorShade,
            greyColor,
            successColorShade,
            Redcolor,
            infoColorShade,
            greyColor,
            successColorShade
          ],
          data: seriesData,
          borderWidth: 0
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
      <div>
          <CardTitle className='mb-75' tag='h4'>Top 7 Malware</CardTitle>
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
        <div style={{ height: '300px' }}>
          <Polar data={data} options={options} height={300} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsPolarAreaChart
