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

  handleClickMe() {
    this.clickEvent.emit(this.inputEvent.name);
  }

  logFoo() {
    console.log('foo');
  }
  constructor() {}

  ngOnInit() {}
}
