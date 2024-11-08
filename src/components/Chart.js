import React from 'react';
import { BarChart } from '@mui/x-charts';

const MyChartComponent = () => {
  // Sample data for the bar chart
  const data = [
    { day: 'Monday', hours: 2 },
    { day: 'Tuesday', hours: 3 },
    { day: 'Wednesday', hours: 4 },
    { day: 'Thursday', hours: 1 },
    { day: 'Friday', hours: 5 },
    { day: 'Saturday', hours: 2 },
    { day: 'Sunday', hours: 3 },
  ];

  return (
    <div>
      <h2>Weekly Screen Time</h2>
      <BarChart
        data={data}
        xField="day"
        yField="hours"
        title="Screen Time per Day"
        xAxis={{ title: 'Days of the Week' }}
        yAxis={{ title: 'Hours' }}
      />
    </div>
  );
};

export default MyChartComponent;
