import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ToastrService } from './services/toastr.service';
// import { EventService } from './events/services/event.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  // providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {}
