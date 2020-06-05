import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr

@Component({
    template: `
    <div class = "background">
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
              <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `,
})

//we add implement OnInit to let the typescript know that we are loading the component using ngOnInit for saftey
export class EventsListComponent implements OnInit{
  events: IEvent[]

  //It is not a good idea to put anything long run in a constructor because it takes time
  constructor (private route:ActivatedRoute) {
    
  }

  //life cycle event when a component is being loaded
  ngOnInit() {
    this.events = this.route.snapshot.data['events'] 
        //from the resolve function in events-list-resolver.service.ts
        //then we load the event into the routes.ts with "resolve:{events:EventListResolver}"
        //hook up the 'events' with our component here
  }

}
