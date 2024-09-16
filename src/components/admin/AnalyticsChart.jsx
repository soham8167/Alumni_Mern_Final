import React from 'react';
import { Line } from 'react-chartjs-2';

const AnalyticsChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'User Growth',
        data: data.values,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">User Analytics</h3>
      <Line data={chartData} />
    </div>
  );
};

export default AnalyticsChart;
