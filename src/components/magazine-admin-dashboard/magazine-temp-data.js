import { formatNumber } from '../../utils/util-functions';

export const clickThroughRateSeries = [
  {
    name: 'Something',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
  {
    name: 'Another thing',
    data: [5, 30, 45, 20, 59, 32, 99, 11, 128],
  },
];

export const clickThroughRateOptions = {
  chart: {
    height: 300,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  markers: {
    size: 4,
  },
  title: {
    text: 'Click through rate',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#BDBDBD',
    },
  },
  subtitle: {
    text: '35%',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#FF5F15',
    },
  },
  grid: {
    row: {
      colors: ['transparent'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    show: false,
  },
};

export const engagementRateSeries = [
  {
    name: 'Something',
    data: [10, 141, 135, 151, 149, 162, 169, 191, 148],
  },
  {
    name: 'Another thing',
    data: [5, 30, 45, 20, 59, 32, 99, 11, 128],
  },
];

export const engagementRateOptions = {
  chart: {
    height: 300,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 4,
  },
  title: {
    text: 'Engagement rate',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#BDBDBD',
    },
  },
  subtitle: {
    text: '75%',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#FF5F15',
    },
  },
  grid: {
    row: {
      colors: ['transparent'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    show: false,
  },
};

export const reachSeries = [
  {
    name: 'Something',
    data: [10, 141, 135, 151, 149, 162, 169, 191, 148],
  },
  {
    name: 'Another thing',
    data: [5, 30, 45, 20, 59, 32, 99, 11, 128],
  },
];

export const reachOptions = {
  chart: {
    height: 300,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 4,
  },
  title: {
    text: 'Reach',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#BDBDBD',
    },
  },
  subtitle: {
    text: '500,000',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#FF5F15',
    },
  },
  grid: {
    row: {
      colors: ['transparent', '#F1F1F1'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    show: false,
  },
};

export const trafficSourceDistributionSeries = [50, 35, 15];
export const trafficSourceDistributionOptions = {
  chart: {
    type: 'donut',
    height: 380,
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'Traffic Source Distribution',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#BDBDBD',
    },
  },
  subtitle: {
    text: '100%',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#FF5F15',
    },
  },
  labels: ['Social Media', 'Search Engines', 'Direct Traffic'],
};

export const adSpendAllocationSeries = [50, 35, 15];
export const adSpendAllocationOptions = {
  chart: {
    type: 'donut',
    height: 380,
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'Ad Spend Allocation',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#BDBDBD',
    },
  },
  subtitle: {
    text: '$3,000',
    align: 'left',
    margin: 10,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'inherit',
      color: '#FF5F15',
    },
  },
  labels: ['Social Media Ads', 'Search Ads', 'Display Ads'],
};

export const demographics = [
  {
    id: 0,
    country: 'nigeria',
    value: 110_000,
  },
  {
    id: 1,
    country: 'usa',
    value: 90_000,
  },
  {
    id: 2,
    country: 'canada',
    value: 70_000,
  },
  {
    id: 3,
    country: 'south africa',
    value: 50_000,
  },
  {
    id: 4,
    country: 'ghana',
    value: 50_000,
  },
  {
    id: 5,
    country: 'south korea',
    value: 130_000,
  },
  {
    id: 6,
    country: 'mexico',
    value: 110_000,
  },
];

export const visitorsStatisticsSeries = [
  {
    name: 'Series 1',
    data: [19, 26, 38, 40, 45],
  },
];

export const visitorsStatisticsOptions = {
  chart: {
    height: 280,
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: ['#FF5F15', '#FF5F15'],
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  stroke: {
    show: false,
  },
};

export const churnRateOptions = {
  chart: {
    type: 'bar',
    height: 450,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4.95,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
    },
  },
  stroke: {
    show: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return formatNumber(val);
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return formatNumber(val);
      },
    },
  },
  fill: {
    opacity: 1,
    colors: ['#FF5F15', '#FF9462', '#FFCDB6'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    markers: {
      shape: 'circle',
      size: 5,
    },
    floating: false,
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    // offsetX: 40,
    // offsetY: 5,
  },

  dataLabels: {
    enabled: false,
  },
};

export const churnRateSeries = [
  {
    name: 'Active subscribers',
    data: [195_000, 225_000, 150_000, 200_000, 100_000, 110_000, 250_000],
  },
  {
    name: 'Inactive but still subscribed',
    data: [120_000, 126_000, 133_000, 120_000, 60_000, 70_000, 120_000],
  },
  {
    name: 'Unsubscribed',
    data: [120_000, 170_000, 110_000, 90_000, 200_000, 180_000, 40_000],
  },
];