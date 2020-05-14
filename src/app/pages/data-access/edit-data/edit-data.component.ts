import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor() { }
  activeIds: string[] = ['custom-panel-3'];
  startDate;
  endDate;

  ngOnInit() {
  }
  panelHeaderClick(id: string) {
    if (id) {
      if (this.activeIds.includes(id)) {
        this.activeIds = [];
        return;
      }
      this.activeIds = []
      this.activeIds.push(id);
    }
  }

  onCalendarOpen() {
    $('.page-content').css('overflow-y','visible');
  }

  onCalendarClose() {
    $('.page-content').css('overflow-y','auto');
  }

}
