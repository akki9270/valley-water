import { Component, OnInit, ElementRef } from '@angular/core';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  list: ElementRef<any>;
  constructor() {}

  onNavigationClick(event) {
    // Toggle Active Class
    let ulEle = $('nav ul').children();
    ulEle.each((item, data) => {
      let linkEle = $(data).find('a');
      $(linkEle).removeClass('selected');
    });
    if (event.target) {
      $(event.target).addClass('selected');
    } else if (event) {
      $(event).addClass('selected');
    }


  }

  ngOnInit() {
    this.logDates();
  }

  logDates() {
    var startObj = moment('2020-05-01 01:00:00');
    var endObj = moment('2020-05-11 23:55:00');
    let data = [];
    let count = 0;
    for(var current = startObj; current < endObj;current=startObj.add(15,'minute'))
    {
        count += 1;
        let obj = {};
        data.push(
          {
            date: current.format('L LTS'),
            stage: Math.random() + 2
          }
        );
      //  console.log(current.format('L LTS'));
    }
    // console.log(JSON.stringify(data));
  }

}