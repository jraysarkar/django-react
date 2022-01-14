import Chart from 'react-apexcharts'
import { Fragment, useState, useRef, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, Share, Printer, FileText, File, Grid, Copy, Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, UncontrolledButtonDropdown, Row, Button,
  DropdownToggle, Modal, ModalHeader, ModalBody, FormGroup, Input, CustomInput, ModalFooter,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
  import XLSX from 'xlsx'
  import axios from "axios"
import * as FileSaver from 'file-saver'

const ApexRadiarChart = () => {

  const [countData, setCountData] = useState([])
  const [attack_threat_classData, setAttack_threat_classData] = useState([])
   
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/attack/').then((res) => {

      // lconsole.log(res)

      setCountData(res.data.count)

      setAttack_threat_classData(res.data.attack_threat_class)

    })

  }, [countData, attack_threat_classData])

  const donutColors = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
    series6: '#008000',
    series7: '#242926',
    series8: '#a80d1d',
    series9: '#0db8a1',
    series10: '#851410',
    series11: '#81d40d',
    series12: '#ee00ff',
    series13: '#826bf8',
    series14: '#2b9bf4',
    series15: '#FFA1A1',
    series16: '#008000',
    series17: '#242926',
    series18: '#242926'
  }
  const options = {
    legend: {
      show: true,
      position: 'right'
    },
    // labels: ['Trojan Attacks', 'Stealer Attacks', 'Denial of Service Attacks', 'Office Macro Attacks', 'Phishing Attack', 'Evasion Attack', 'Ransomware Attacks', 'SQL Injection Attack', 'Zero-day Exploit', 'Man in the middle', 'Rootkits Attack', 'IoT Attacks'],

  labels: attack_threat_classData,

  colors: [donutColors.series1, donutColors.series2, donutColors.series3, donutColors.series4, donutColors.series5, donutColors.series6, donutColors.series7, donutColors.series8, donutColors.series9, donutColors.series10, donutColors.series11, donutColors.series12, donutColors.series13, donutColors.series14, donutColors.series15, donutColors.series16, donutColors.series17, donutColors.series18],
    dataLabels: {
      enabled: true,
      formatter(val, opt) {
        return `${parseInt(val)}`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1.9rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `${parseInt(val)}`
              }
            },
            total: {
              show: true,
              fontSize: '1.9rem',
              labels: attack_threat_classData[0],
              formatter(w) {
                return `${countData[0]}`
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.9rem'
                  },
                  value: {
                    fontSize: '1.9rem'
                  },
                  total: {
                    fontSize: '1.7rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  // const series = [85, 93, 50, 80, 33, 100, 30, 40, 60, 50, 40, 60]
  const series = countData
   return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className='mb-75' tag='h2'>
            Top Attacks
          </CardTitle>
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
      <div style={{ height: '200px' }}>
        <Chart options={options} series={series} type='donut' height={350} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ApexRadiarChart