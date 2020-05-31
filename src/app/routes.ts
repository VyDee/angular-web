import { Routes } from '@angular/router'
import {
        EventsListComponent,
        EventDetailsComponent,
        CreatEventComponent,
        EventRouteActivator,
        EventListResolver,
        CreateSessionComponent
} from './events/index'
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    //the problem here is that since events/new
    // and events/:id both have something after the events
    // but new is not a parameter compared to id
    // for that reason, we need to put events/new in first
    //so the program will look for event/new first if it is 
    //passed in and not confused with event/:id
        {path: 'events/new', component:CreatEventComponent, canDeactivate:['canDeactivateCreateEvent']},               
        {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
            //before resolving the route, call EventListResolver and when it finishes and returns some data
            //add data to the route as a property named events
            //==> This makes sure that the page is not loaded until all the events load
            //==> since events are loaded to the route, they are only loaded once
        {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]}, 
            //events/1 or /events/foo
            //Quick note -- a colon :id means that is an id parameter

        {path:'events/session/new', component: CreateSessionComponent},
        {path: '404', component:Error404Component},
        {path: '', redirectTo: '/events', pathMatch: 'full'},  // if it is null then they will redirect back to the events path
        {path: 'user', loadChildren: './user/user.module#UserModule'} //when the path start with user => load UserModule for this path
]