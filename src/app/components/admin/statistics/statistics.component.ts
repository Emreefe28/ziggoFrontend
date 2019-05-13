import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../../services/statistics.service';
import {Stats} from '../../../models/stats.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  title = 'amount of chats';
  type = 'ColumnChart';
  stats: Stats = new Stats();
  data = [
    ["2012", 900],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 1250],
    ["2016", 1530]
  ];
  columnNames = ['week', 'Chats'];
  options = {
    colors: ['#FF0000'],
    legendTextStyle: {color: '#8B8B8B' },
    titleTextStyle: {color: '#8B8B8B'},

  };

  constructor(private statService: StatisticsService) {
  }

  ngOnInit() {
    this.statService.getStats().subscribe(
      data => {
        this.stats = data;
        console.log(this.stats);

      }
    );
  }


}
