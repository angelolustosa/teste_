import { useState, useEffect } from 'react';

import { Chart } from 'primereact/chart';

const Dashboard = () => {
  const [chartLineData, setChartLineData] = useState({});
  const [chartLineOptions, setChartLineOptions] = useState({});
  const [chartPieData, setChartPieData] = useState({});
  const [chartPieOptions, setChartPieOptions] = useState({});

  function generateLineChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartLineData(data);
    setChartLineOptions(options);
  }

  function generatePieChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartPieData(data);
    setChartPieOptions(options);
  }

  useEffect(() => {
    generateLineChart();
    generatePieChart();
  }, []);

  return (
    <div className={'bg-white	p-3 shadow-2 border-round-md overflow-hidden'}>
      <h2
        className={'flex justify-content-between align-items-center text-600'}
      >
        {'Dashboard'}
      </h2>
      <div className={'grid'}>
        <div className={'col-12 md:col-6 lg:col-3'}>
          <div
            className={'border-1 border-solid border-300 border-round-md p-2'}
          >
            <h6 className={'m-0'}>{'Big number #1'}</h6>
            <h3 className={'m-0 mt-3'}>{123}</h3>
          </div>
        </div>
        <div className={'col-12 md:col-6 lg:col-3'}>
          <div
            className={'border-1 border-solid border-300 border-round-md p-2'}
          >
            <h6 className={'m-0'}>{'Big number #2'}</h6>
            <h3 className={'m-0 mt-3'}>{123}</h3>
          </div>
        </div>
        <div className={'col-12 md:col-6 lg:col-3'}>
          <div
            className={'border-1 border-solid border-300 border-round-md p-2'}
          >
            <h6 className={'m-0'}>{'Big number #3'}</h6>
            <h3 className={'m-0 mt-3'}>{123}</h3>
          </div>
        </div>
        <div className={'col-12 md:col-6 lg:col-3'}>
          <div
            className={'border-1 border-solid border-300 border-round-md p-2'}
          >
            <h6 className={'m-0'}>{'Big number #4'}</h6>
            <h3 className={'m-0 mt-3'}>{123}</h3>
          </div>
        </div>
        <div className={'col-12 md:col-9 lg:col-9'}>
          <div
            className={
              'border-1 border-solid border-300 border-round-md p-2'
            }
          >
            <h6 className={'m-0'}>{'Some Line Graphic'}</h6>
            <Chart
              type={'line'}
              data={chartLineData}
              options={chartLineOptions}
              className={'h-15rem'}
            />
          </div>
        </div>
        <div className={'col-12 md:col-3 lg:col-3'}>
          <div
            className={
              'border-1 border-solid border-300 border-round-md p-2'
            }
          >
            <h6 className={'m-0'}>{'Some Pie Graphic'}</h6>
            <Chart
              type={'pie'}
              data={chartPieData}
              options={chartPieOptions}
              className={'h-15rem'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
