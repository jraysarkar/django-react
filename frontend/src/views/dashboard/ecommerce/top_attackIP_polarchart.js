import { Polar } from 'react-chartjs-2'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { Fragment, useState, useRef, useEffect } from 'react'
import axios from "axios"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const ChartjsPolarAreaChart = ({
  primary,
  labelColor,
  primaryColorShade,
  warningColorShade,
  infoColorShade,
  greyColor,
  successColorShade,
  tooltipShadow
}) => {
  const [seriesData, setSeriesData] = useState([])
  const [labelsData, setLabelsData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3004/Attack_Ports").then((res) => {
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
          padding: 20,
          boxWidth: 5,
          fontColor: labelColor
        }
      },
      layout: {
        padding: {
          top: -5,
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
      // labels: ['10.20.30', '34.78.88.99', '199.87.78.22', '43.234.455.231', '98.345.7654.22', '24.43.56.77.10', '232.434.435.12', '123.434.5353.123', '1234.314.124.12', '12.213.23.11'],
      labels: labelsData,
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            primaryColorShade,
            warningColorShade,
            primary,
            infoColorShade,
            greyColor,
            successColorShade,
            primary,
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
          <CardTitle className='mb-75' tag='h4'>Top 10 Attack Ports</CardTitle>
          <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
        </div>
        <div className='d-flex align-items-center ml-8'>
          <Calendar size={12} />
          <Flatpickr
            options={{
              mode: 'range',
              defaultDate: ['2019-05-01', '2019-05-10']
            }}
            className='form-control flat-picker bg-transparent border-0 shadow-none'
          />
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '350px' }}>
          <Polar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsPolarAreaChart
