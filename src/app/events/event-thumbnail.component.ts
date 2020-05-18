import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events',event.id]" class="well howerwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault >(Normal Start)</span>
        </div>

        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location">
            <span> Location: {{event?.location?.address}} </span> 
            <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}} </span>
        </div>
        <div [hidden] = "!event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>`,
    styles: [`
        .thumbnail {min-height: 210px;}
        .pad-left{ margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    //Input means that the event will take the input as it is passed in
    //event: any --- means that we don't care what type that is
    @Input() event: IEvent

    getStartTimeStyle() :any
    {
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
}