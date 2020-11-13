import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import "./Plot.scss";

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Hours Worked',
      data: [10, 1, 10, 8, 2, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
}

const VerticalBar = () => (
  <>
    <div className='header'>
      <h1 className='title'>Hours worked from 6-11-20 to 13-11-20</h1>
      <div className='links'>
      </div>
    </div>
    <Bar data={data} options={options} 	/>
  </>
)

export default VerticalBar