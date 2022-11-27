import { UserpickRequest } from './../model/userpick-request';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/authentication/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserpickRequestMapperService {
  constructor(private authService: AuthService) {}

  map(userPickEntity: String): UserpickRequest {
    const userIsLoggedIn: boolean = this.authService.isLoggedIn();
    const loggedUserId = userIsLoggedIn ? this.authService.getUser().userId : 'non-logged';

    return {
      userPick: userPickEntity,
      userId: loggedUserId,
    } as UserpickRequest;
  }
}
