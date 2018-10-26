import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  handleClickEvent(event) {
    this.toastr.success(event.name);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
