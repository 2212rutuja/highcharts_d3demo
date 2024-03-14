import { Component ,ElementRef,OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { areaChartConfig, barChartConfig, bubbleChartConfig, coloumnChartConfig, donutChartConfig, dumbellChartConfig, lineChartConfig, lollipopChartConfig, pieChartConfig, scatterChartConfig, splineChartConfig, timelineChartConfig } from './highchartConfig';
import { createLineChart } from './d3Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'my-app';

  lineChart = lineChartConfig;
  pieChart = pieChartConfig;
  areaChart = areaChartConfig;
  barChart = barChartConfig;
  scatterChart = scatterChartConfig;
  donutChart = donutChartConfig;
  splineChart = splineChartConfig;
  coloumnChart = coloumnChartConfig;
  timelineChart = timelineChartConfig;
  dumbellChart = dumbellChartConfig;
  lollipopChart = lollipopChartConfig;
  bubbleChart = bubbleChartConfig;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    debugger
    const container = this.elRef.nativeElement.querySelector('#line-chart-container');
    const data = [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16];
    createLineChart(container, data);
  }

  
  charts: Chart[] = [this.lineChart, this.pieChart, this.areaChart, this.barChart, this.scatterChart,this.donutChart,this.splineChart,this.coloumnChart,this.timelineChart, this.dumbellChart, this.lollipopChart,this.bubbleChart];
  activeChartIndex = 0;

  // onclick()
  setActiveChartIndex(index: number) {
    this.activeChartIndex = index;
  }

  nextChart() {
    this.activeChartIndex = (this.activeChartIndex + 1) % this.charts.length;
  }

  prevChart() {
    this.activeChartIndex =
      (this.activeChartIndex - 1 + this.charts.length) % this.charts.length;
  }

  isFirstChart(): boolean {
    return this.activeChartIndex === 0;
  }

  isLastChart(): boolean {
    return this.activeChartIndex === this.charts.length - 1;
  }

  
     

}
