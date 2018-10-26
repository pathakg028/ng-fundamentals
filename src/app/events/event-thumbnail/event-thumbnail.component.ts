import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input()
  inputEvent: any;

  @Output()
  clickEvent = new EventEmitter();

  getStartTimeClass() {
    const isEarly = this.inputEvent && this.inputEvent.time === '8:00 am';
    if (isEarly) {
      return 'green bold';
    } else {
      return '';
    }
  }

  handleClickMe() {
    this.clickEvent.emit(this.inputEvent.name);
  }

  logFoo() {
    console.log('foo');
  }
  constructor() {}

  ngOnInit() {}
}
