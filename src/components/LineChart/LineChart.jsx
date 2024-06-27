import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

    useEffect(() => {
        let dataCopy = [['Date','Prices']]
        if(historicalData.prices) {
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(5,10)}`, item[1]])
            })
            setData(dataCopy)
        }
    },[historicalData])

    const [data, setData] = useState([['Date','Prices']])

  return (
    <Chart 
    
    chartType='LineChart'
    data={data}
    height='100%'
    legendToggle
    />
  )
}

export default LineChart