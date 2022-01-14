import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ApexColumnCharts = ({ direction }) => {
  const [trojanData, setTrojanData] = useState([])
  const [stealerData, setStealerData] = useState([])
  const [dosData, setDosData] = useState([])
  const [phishingData, setPhishingData] = useState([])
  const [evasionData, setEvasionData] = useState([])
  const [rootkitsData, setRootkitsData] = useState([])
  const [sqlinjectionData, setSqlinjectionData] = useState([])
  const [iotData, setIotData] = useState([])
  const [rootkitData, setRootkitData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
   

  useEffect(() => {
    axios.get("http://localhost:3004/Mothly_Attacks").then((res) => {
      // console.log(res)
      setTrojanData(res.data.trojan)
      setStealerData(res.data.stealer)
      setDosData(res.data.dos)
      setPhishingData(res.data.phishing)
      setEvasionData(res.data.evasion)
      setRootkitsData(res.data.rootkits)
      setSqlinjectionData(res.data.sqlinjection)
      setIotData(res.data.iot)
      setRootkitData(res.data.rootkit)
      setCategoriesData(res.data.categories)
    })
  }, [trojanData, categoriesData, stealerData, dosData, phishingData, evasionData, rootkitsData, sqlinjectionData, iotData, rootkitData])

  const columnColors = {
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
    series12: '#d4ca0d'
  }

  const options = {
    chart: {
      height: 400,
      type: 'bar',
      stacked: true,
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    colors: [columnColors.series1, columnColors.series2, columnColors.series3, columnColors.series4, columnColors.series5, columnColors.series6, columnColors.series7, columnColors.series8, columnColors.series9, columnColors.series10, columnColors.series11, columnColors.series12],
    stroke: {
      show: true,
      colors: ['transparent']
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: categoriesData 
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      name: 'Trojan',
      data: trojanData 
    },
    {
      name: 'Stealer',
      data: stealerData
    },
    {
        name: 'DOS',
        data: dosData
      },
      {
        name: 'Phishing',
        data: phishingData
      },
      {
        name: 'Evasion',
        data: evasionData
      },
      {
        name: 'Rootkits',
        data: rootkitsData
      },
      {
        name: 'SQL Injection',
        data: sqlinjectionData
      },
      {
        name: 'IoT',
        data: iotData
      },
      {
        name: 'Rootkit',
        data: rootkitData
      }

  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        <div>
        <CardTitle className='mb-75' tag='h4'>Monthly Attack Data</CardTitle>
        <CardSubtitle className='text-muted'>Monthly Attack Details</CardSubtitle>
        </div>
        <div className='d-flex align-items-center mt-md-0 mt-1'>
          <Calendar size={17} />
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
        <Chart options={options} series={series} type='bar' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexColumnCharts
