import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
        //getEvents() return an observable
        // then we call map to give us the access to the events passed in on that stream and also return the observable
        //then we return those events
    }
}