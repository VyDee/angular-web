import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { Observable, of } from 'rxjs';
describe('VoterService', () => {
  let voterService: VoterService,
  mockHttp;

  //initialize in beforeEach so we can have a fresh copy of any service we want to test
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
    voterService = new VoterService(mockHttp);
  })


  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {
      var session = {id: 6, voters:["joe", "john"]};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3,<ISession>session, "joe");

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("john");
    })
  })


})
