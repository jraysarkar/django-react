import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ChartjsLineChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  greencolor,
  Dodgerbulecolor,
  greycolor,
  blackcolor,
  Darkredcolor,
  Strongcyancolor,
  redcolor,
  Stronggreencolor,
  lineChartPrimary,
  mostlypurecolor
}) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      hover: {
        mode: 'label'
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
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spe', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [180, 120, 158, 111, 122, 166, 120, 134, 185, 210, 270, 79, 120, 121, 176],
          label: 'Trojan Attacks',
          borderColor: lineChartPrimary,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartPrimary,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartPrimary,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [130, 125, 105, 130, 215, 195, 140, 160, 230, 198, 220, 170, 210, 200, 280],
          label: 'Stealer Attacks',
          borderColor: lineChartDanger,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 99, 82, 90, 115, 78, 60, 75, 130, 155, 125, 90, 140, 130, 180],
          label: 'Denial of Service Attacks',
          borderColor: warningColorShade,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: warningColorShade,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: warningColorShade,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        
        {
          data: [60, 99, 77, 90, 115, 115, 74, 124, 130, 155, 25, 90, 140, 130, 180],
          label: 'Office Macro Attack',
          borderColor: greencolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: greencolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: greencolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 97, 72, 91, 114, 104, 79, 135, 13, 15, 25, 9, 145, 137, 190],
          label: 'Phishing Attack',
          borderColor: Dodgerbulecolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: Dodgerbulecolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: Dodgerbulecolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [100, 10, 12, 11, 4, 1, 70, 130, 190, 195, 295, 190, 145, 137, 190],
          label: 'Evasion Attack',
          borderColor: greycolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: greycolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: greycolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 15, 12, 11, 1, 1, 70, 13, 130, 15, 55, 9, 4, 7, 0],
          label: 'Ransomware Attacks',
          borderColor: blackcolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: blackcolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: blackcolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 50, 72, 91, 140, 100, 75, 173, 130, 155, 25, 190, 145, 237, 190],
          label: 'SQL Injection Attack',
          borderColor: Darkredcolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: Darkredcolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: Darkredcolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          label: 'Zero-day Exploit',
          borderColor: Strongcyancolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: Strongcyancolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: Strongcyancolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
          label: 'Man in the middle',
          borderColor: redcolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: redcolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: redcolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [30, 150, 172, 191, 14, 10, 7, 13, 130, 155, 255, 90, 45, 37, 90],
          label: 'Rootkits Attack ',
          borderColor: Stronggreencolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: Stronggreencolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: Stronggreencolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [300, 300, 302, 300, 300, 300, 70, 13, 130, 155, 255, 90, 45, 37, 90],
          label: 'IoT Attacks',
          borderColor: mostlypurecolor,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: mostlypurecolor,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: mostlypurecolor,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        }
      ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Statistics
          </CardTitle>
          <CardSubtitle>Commercial networks and enterprises</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '450px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
