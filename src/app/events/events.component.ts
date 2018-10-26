import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {}

  handleClickEvent(event) {
    console.log(event);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
