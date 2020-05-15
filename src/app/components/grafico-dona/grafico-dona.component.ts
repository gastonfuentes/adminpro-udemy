import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js'; //libreria para graficas
import { MultiDataSet, Label } from 'ng2-charts'; //libreria para graficos

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  //   [50, 150, 120],
  //   [250, 130, 70],
  // ];
  // public doughnutChartType: ChartType = 'doughnut';

@Input() doughnutChartLabels: Label[] = [];
@Input() doughnutChartData: MultiDataSet[] = [];
@Input() doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    console.log(this.doughnutChartLabels)
  }

}
