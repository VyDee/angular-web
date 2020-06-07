import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { IUser } from './user.model'
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService{
    currentUser: IUser

    constructor(private http:HttpClient){
    }
    loginUser (userName: string, password: string) {

      let loginInfo = { username: userName, password: password };
      let options = { headers: new HttpHeaders({'Content-Type':'application/json'})};

      // Use 'tap()' is the way we tap into data stream and take actions when a piece of data
      // come through observable
      return this.http.post('/api/login',loginInfo,options)
        .pipe(tap(data => {
          this.currentUser = <IUser>data['user'];
        }))
        .pipe(catchError(err => {
          return of(false) //create an observable of false in case of error
        }))
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName= firstName;
        this.currentUser.lastName= lastName;
    }
}
