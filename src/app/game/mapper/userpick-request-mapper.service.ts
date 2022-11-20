import { UserpickRequest } from './../model/userpick-request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserpickRequestMapperService {
  constructor() {}

  map(userPickEntity: String): UserpickRequest {
    const userIsLoggedIn: boolean = false;
    const loggedUserName: string = '';

    return {
      userPick: userPickEntity,
      userName: userIsLoggedIn ? loggedUserName : 'non-logged',
    } as UserpickRequest;
  }
}
