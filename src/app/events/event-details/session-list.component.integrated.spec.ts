import { CollapsibleWellComponent } from './../../common/collapsible-well.component';
import { DurationPipe } from './../shared/duration.pipe';
// import { UpvoteComponent } from './upvote.component';
import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { SessionListComponent } from './session-list.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component, NO_ERRORS_SCHEMA} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>, // this is a wrapper of the component so we can have access to dependency and inject service
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement; // wrapper around native element

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        // UpvoteComponent,
        DurationPipe,
        // CollapsibleWellComponent
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
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

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

    // Solution 1: query selector
      // expect(element.querySelector('[well-title').textContent).toContain('Session 1');

    // Session 2: using deBugEl
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });

});
