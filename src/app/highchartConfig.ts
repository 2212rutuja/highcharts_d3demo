import { Chart} from "angular-highcharts";

//linechart - visualize data that changes over time.
export const lineChartConfig = new Chart({ 
    chart: {
        type: 'line',
      },
      title: {
        text: 'Patients'
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Patients admitted',
          data: [10, 2, 3,6,9,17,20,10,5,2,16]
        } as any
      ]
  
})

//donut-useful for showing the proportion of each category relative to the whole,
export const donutChartConfig = new Chart({
    chart: {
        type: 'pie',
        
      },
    
      credits: {
        enabled: false,
      },

    
      plotOptions: {
        pie: {
          innerSize: '75%',
          borderWidth: 5,
          borderColor: '',
          dataLabels: {
            connectorWidth: 0,
          }, 
        },
      },
    
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: 'Diseases',
      },
    
      legend: {
        enabled: false,
      },
    
      series: [
        {
          type: 'pie',
          data: [
            { name: 'COVID 19', y: 1, color: '#eeee85' },
    
            { name: 'HIV/AIDS', y: 2, color: '#393e99' },
    
            { name: 'FLU', y: 3, color: '#00adb5' },
            { name: 'DIARRHEA', y: 4, color: '#eeeeee' },
            { name: 'DIABETES', y: 5, color: '#506ef9' },
          ],
        },
      ],
})

//areachart - highlighting the magnitude of change over time and for comparing multiple data series.
export const areaChartConfig = new Chart({
    chart: {
        type: 'area'
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        type: 'area', 
        name: 'Sales',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
})

//barchart- used to compare the values of different categories or to track changes over time for a single category
export const barChartConfig = new Chart({
    chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart'
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        type:'bar',
        name: 'Series Name',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
})

//piechart - Pie charts are useful for showing the proportion of parts to a whole, making it easy to visualize percentages or fractions of a total.
export const pieChartConfig = new Chart({
    chart: {
        type: 'pie'
      },
      title: {
        text: 'Pie Chart'
      },
      plotOptions: {
        pie: {
          innerSize: '0%', 
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        } 
      },
      series: [{
        type:'pie',
        name: 'Data',
        
        data: [
          { name: 'Chrome', y: 62 },
          { name: 'Firefox', y: 12 },
          { name: 'Edge', y: 11},
          { name: 'Safari', y: 4.7},
          { name: 'Other', y: 10.3 }
        ]
      }]
})

//scatter - each point of data in a series without connection, indv data point is called marker,analyze the relationship between two variables.
export const scatterChartConfig = new Chart({
    chart: {
        type: 'scatter'
      },
      title: {
        text: 'Scatter Chart'
      },
      xAxis: {
        title: {
          text: 'X-axis'
        }
      },
      yAxis: {
        title: {
          text: 'Y-axis'
        }
      },
      series: [{
        type:'scatter',
        name: 'Data',
        color: 'rgba(223, 83, 83, .5)',
         data: [[1, 3],[2, 9],[3, 5],[4, 7],[5, 3],[6, 8],[7, 9],[8, 10],[9, 5],[10, 6]], 
        
      }]
})

//spline -  type of line chart that uses a smooth curve (spline) to connect data points, rather than straight lines, 
export const splineChartConfig = new Chart({
    
    chart: {
        type: 'spline'
      },
      title: {
        text: 'Spline Chart'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        type:'spline',
        name: 'Series Name',
        data: [10, 20, 15, 25, 30, 28, 35, 40, 45, 42, 38, 50]
      }]
})


export const coloumnChartConfig = new Chart({
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Sales Report',
    
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr']
  },
  yAxis: {
    title: {
      text: 'Sales'
    }
  },
  series: [
    
    {
      type:'column',
      name: 'Sales 2021', // Name of the first data series
      data: [5000, 7000, 4000, 6000] // Data points representing sales revenue for each product category in 2021
    },
    {
      type:'column',
      name: 'Sales 2022', // Name of the second data series
      data: [5500, 7200, 4200, 6100] // Data points representing sales revenue for each product category in 2022
    }

    
  ],
  credits: {
    enabled: false
  },
  exporting: {
    enabled: true
  }
})



export const paretoChartConfig = new Chart({
  chart: {
    type: 'column'
  },
  xAxis: {
    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
  },
  yAxis: [{
    title: {
      text: 'Primary Axis'
    }
  }, {
    title: {
      text: 'Secondary Axis'
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Primary',
    type: 'column',
    data: [10, 7, 5, 3, 1],
    tooltip: {
      valueSuffix: ''
    }
  }, {
    name: 'Secondary',
    type: 'line',
    yAxis: 1,
    data: [50, 70, 85, 95, 100],
    tooltip: {
      valueSuffix: '%'
    }
  }]
})

export const steplineChartConfig = new Chart({
  chart: {
    type: 'line'
  },
  title: {
    text: 'Step Line Chart'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    title: {
      text: 'Values'
    }
  },
  series: [{
    type: 'line',
    step: 'left',
    name: 'Series',
    data: [1, 3, 2, 4, 5, 7, 6]
  }]
})
