import { CollapsibleWellComponent } from './../../common/collapsible-well.component';
import { DurationPipe } from './../shared/duration.pipe';
import { UpvoteComponent } from './upvote.component';
import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { SessionListComponent } from './session-list.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>, // this is a wrapper of the component so we can have access to dependency and inject service
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement //wrapper around native element

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports:[],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        },
        {
          provide: VoterService,
          useValue: mockVoterService
        }
      ],
      schemas: []
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  })

  describe('initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = [{
        id: 3,
        name: 'Session 1',
        presenter: 'Joe',
        duration: 1, level: 'beginner',
        abstract: 'abstract',
        voters: ['john', 'bob']
      }];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title').textContent).toContain('Session 1');
    })
  })

})
