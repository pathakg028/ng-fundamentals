import { Component, OnInit } from '@angular/core';
// import { ToastrService } from '../services/toastr.service';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService // private toastr: ToastrService
  ) {}

  handleClickEvent(event) {
    console.log(event);
    // this.toastr.success(event.name);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  logFoo() {
    console.log('Foo');
  }
}
