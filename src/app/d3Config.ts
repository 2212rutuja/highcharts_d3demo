import * as d3 from 'd3';

export function createLineChart(container: HTMLElement, data: number[]) {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  

  const svg = d3.select(container)
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const x = d3.scaleLinear()
              .domain([0, data.length - 1])
              .range([0, width]);

  const maxValue = d3.max(data)!; 
  const y = d3.scaleLinear()
              .domain([0, maxValue])
              .range([height, 0]);

  const line = d3.line<number>()
                 .x((d, i) => x(i))
                 .y((d) => y(d));

  svg.append('path')
     .datum(data)
     .attr('class', 'line')
     .attr('d', line);

  svg.selectAll('.dot')
     .data(data)
     .enter().append('circle')
     .attr('class', 'dot')
     .attr('cx', (d, i) => x(i))
     .attr('cy', y)
     .attr('r', 5);
}
