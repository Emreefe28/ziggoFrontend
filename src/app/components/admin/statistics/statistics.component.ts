import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  title = 'amount of chats';
  type = 'ColumnChart';
  data;
  stats;

  columnNames = ['week', 'Chats'];
  options = {
    colors: ['#FF0000'],
    legendTextStyle: {color: '#8B8B8B' },
    titleTextStyle: {color: '#8B8B8B'},

  };

  constructor() {
  }

  ngOnInit() {
  }

}
