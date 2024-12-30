import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false
      },
      ticks: {
        stepSize: 20
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Engagement Rate',
      data: [65, 78, 72, 85, 82, 90],
      borderColor: '#16BC88',
      tension: 0.4,
      fill: false
    },
    {
      label: 'Reach',
      data: [45, 55, 60, 58, 65, 70],
      borderColor: '#6366F1',
      tension: 0.4,
      fill: false
    },
    {
      label: 'Clicks',
      data: [30, 35, 40, 45, 48, 52],
      borderColor: '#F59E0B',
      tension: 0.4,
      fill: false
    }
  ]
};

const PerformanceChart: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default PerformanceChart;