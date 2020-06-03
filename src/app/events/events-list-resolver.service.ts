import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        //getEvents() return an Observable and the http request 
        //will not be made until someone subscribes to observable
        return this.eventService.getEvents().subscribe();
    }
}