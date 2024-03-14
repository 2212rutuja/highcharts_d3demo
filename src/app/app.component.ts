/* import { Component ,ElementRef,OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { areaChartConfig, barChartConfig, coloumnChartConfig, donutChartConfig,  lineChartConfig, paretoChartConfig, pieChartConfig, scatterChartConfig, splineChartConfig, steplineChartConfig, } from './highchartConfig';


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
  paretoChart = paretoChartConfig;
  steplineChart = steplineChartConfig;

  constructor(private elRef: ElementRef) {}

  
  charts: Chart[] = [this.lineChart, this.pieChart, this.areaChart, this.barChart, this.scatterChart,this.donutChart,this.splineChart,this.coloumnChart,this.paretoChart, this.steplineChart];
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
 */





import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { areaChartConfig, barChartConfig, coloumnChartConfig, donutChartConfig,  lineChartConfig, paretoChartConfig, pieChartConfig, scatterChartConfig, splineChartConfig, steplineChartConfig } from './highchartConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  charts: { chart: Chart, title?: string }[] = [
    { chart: lineChartConfig, title: 'Line Chart' },
    { chart: pieChartConfig, title: 'Pie Chart' },
    { chart: areaChartConfig, title: 'Area Chart' },
    { chart: barChartConfig, title: 'Bar Chart' },
    { chart: scatterChartConfig, title: 'Scatter Chart' },
    { chart: donutChartConfig, title: 'Donut Chart' },
    { chart: splineChartConfig, title: 'Spline Chart' },
    { chart: coloumnChartConfig, title: 'Column Chart' },
    { chart: paretoChartConfig, title: 'Pareto Chart' },
    { chart: steplineChartConfig, title: 'Step Line Chart' }
  ];

  activeChartIndex = 0;

  ngOnInit() {
    this.setActiveChart(this.activeChartIndex);
  }

  setActiveChart(index: number) {
    this.activeChartIndex = index;
  }

  nextChart() {
    this.activeChartIndex = (this.activeChartIndex + 1) % this.charts.length;
    this.setActiveChart(this.activeChartIndex);
  }

  prevChart() {
    this.activeChartIndex = (this.activeChartIndex - 1 + this.charts.length) % this.charts.length;
    this.setActiveChart(this.activeChartIndex);
  }

  isFirstChart(): boolean {
    return this.activeChartIndex === 0;
  }

  isLastChart(): boolean {
    return this.activeChartIndex === this.charts.length - 1;
  }

  isActiveChart(index: number): boolean {
    return index === this.activeChartIndex;
  }
}
