import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared'

@Component({
    selector: 'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    //OnChanges is called when the input in this class gets a new value
    ngOnChanges() {
        if(this.sessions)
        {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if(filter === 'all')
        {
            this.visibleSessions = this.sessions.slice(0);
            //The .slice method is used to clone the entire session array and set it equals to the visibleSessions
            //Duplicate the array with all the same element
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
}