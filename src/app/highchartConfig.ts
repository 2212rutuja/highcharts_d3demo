import { Chart} from "angular-highcharts";
const data1 = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5];

export const lineChartConfig = new Chart({
    chart: {
        type: 'line'
      },
      title: {
        text: 'Patients'
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


export const pieChartConfig = new Chart({
    chart: {
        type: 'pie',
        plotShadow: false,
      },
    
      credits: {
        enabled: false,
      },
    
      plotOptions: {
        pie: {
          innerSize: '99%',
          borderWidth: 10,
          borderColor: '',
          slicedOffset: 10,
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
            { name: 'COVID 19', y: 1, color: '#eeeeee' },
    
            { name: 'HIV/AIDS', y: 2, color: '#393e46' },
    
            { name: 'EBOLA', y: 3, color: '#00adb5' },
            { name: 'DISPORA', y: 4, color: '#eeeeee' },
            { name: 'DIABETES', y: 5, color: '#506ef9' },
          ],
        },
      ],
})

export const areaChartConfig = new Chart({
    chart: {
        type: 'area'
      },
      title: {
        text: 'Area Chart'
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
        type: 'area', // Specify the type as 'area'
        name: 'Series Name',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
})

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

export const donutChartConfig = new Chart({
    chart: {
        type: 'pie'
      },
      title: {
        text: 'Pie Chart'
      },
      plotOptions: {
        pie: {
          innerSize: '0%', // Adjust this value to create a donut chart
          allowPointSelect: true,
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
          { name: 'Chrome', y: 61.41 },
          { name: 'Firefox', y: 11.84 },
          { name: 'Edge', y: 10.85 },
          { name: 'Safari', y: 4.67 },
          { name: 'Other', y: 10.23 }
        ]
      }]
})

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
    text: 'Monthly Sales Report'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Sales'
    }
  },
  series: [{
    type:'column',
    name: 'Sales',
    data: [
      ['Jan', 10000],
      ['Feb', 15000],
      ['Mar', 20000],
      ['Apr', 18000],
      ['May', 22000],
      ['Jun', 25000],
      ['Jul', 27000],
      ['Aug', 30000],
      ['Sep', 28000],
      ['Oct', 32000],
      ['Nov', 35000],
      ['Dec', 38000]
    ]
  }],
  credits: {
    enabled: false
  },
  exporting: {
    enabled: true
  }
})

export const timelineChartConfig =new Chart({
  chart: {
    type: 'timeline'
},
xAxis: {
    visible: false
},
yAxis: {
    visible: false
},
title: {
    text: 'Timeline of Space Exploration'
},
subtitle: {
    text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
},
series: [{
  type: 'timeline',
    data: [{
        name: 'First dogs',
        label: '1951: First dogs in space',
        description: '22 July 1951 First dogs in space (Dezik and Tsygan)'
    }, {
        name: 'Sputnik 1',
        label: '1957: First artificial satellite',
        description: '4 October 1957 First artificial satellite. First signals from space.'
    }, {
        name: 'First human spaceflight',
        label: '1961: First human spaceflight (Yuri Gagarin)',
        description: 'First human spaceflight (Yuri Gagarin), and the first human-crewed orbital flight'
    }, {
        name: 'First human on the Moon',
        label: '1969: First human on the Moon',
        description: 'First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon'
    }]
}]
})

export const dumbellChartConfig = new Chart({
  chart: {
    type: 'dumbbell'
  },
  title: {
    text: 'Dumbbell Chart'
  },
  xAxis: {
    title: {
      text: 'X Axis Label'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis Label'
    }
  },
  series: [{
    type:'dumbbell',
    name: 'Dumbbell Chart',
    data: [
      // Each data point represents a dumbbell. Format: [x-value, low-value, high-value]
      [1, 10, 20], // Example data point
      [2, 15, 25], // Example data point
      [3, 12, 22]  // Example data point
      // Add more data points as needed
    ],
    marker: {
      symbol: 'circle' // Use circle markers
    }
  }]
})

export const lollipopChartConfig = new Chart({
  chart: {
    type: 'lollipop'
},

accessibility: {
    point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
    }
},

legend: {
    enabled: false
},

subtitle: {
    text: '2021'
},

title: {
    text: 'Top 10 Countries by Population'
},

tooltip: {
    shared: true
},

xAxis: {
    type: 'category'
},

yAxis: {
    title: {
        text: 'Population'
    }
},

series: [{
  type: 'lollipop',
    name: 'Population',
    data: [{
        name: 'China',
        y: 1444216107
    }, {
        name: 'India',
        y: 1393409038
    }, {
        name: 'United States',
        y: 332915073
    }, {
        name: 'Indonesia',
        y: 276361783
    }, {
        name: 'Pakistan',
        y: 225199937
    }, {
        name: 'Brazil',
        y: 213993437
    }, {
        name: 'Nigeria',
        y: 211400708
    }, {
        name: 'Bangladesh',
        y: 166303498
    }, {
        name: 'Russia',
        y: 145912025
    }, {
        name: 'Mexico',
        y: 130262216
    }]
}]

})

export const bubbleChartConfig = new Chart({
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    
  },
  title: {
    text: 'Bubble Chart'
  },
  xAxis: {
    title: {
      text: 'X Axis'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis'
    }
  },
  series: [{
    type:'bubble',
    data: [
      [97, 36, 79],
      [94, 74, 60],
      [68, 76, 58],
      [64, 87, 56],
      [68, 27, 73],
      [74, 99, 42],
      [7, 93, 87],
      [51, 69, 40],
      [38, 23, 33],
      [57, 86, 31]
    ]
  }]
})
