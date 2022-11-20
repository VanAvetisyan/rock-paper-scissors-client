import { UserpickRequestMapperService } from './../mapper/userpick-request-mapper.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { UserpickResponse } from '../model/userpick-response';

@Injectable({
  providedIn: 'root',
})
export class GameRestService {
  static readonly USER_PICK_URL = '/api/rest/rps/userpick';

  constructor(private http: HttpClient, private mapper: UserpickRequestMapperService) {}

  userPicked(objectPicked: String): Observable<UserpickResponse> {
    const requestObject = this.mapper.map(objectPicked);
    return this.http.post<UserpickResponse>(GameRestService.USER_PICK_URL, requestObject).pipe(
      map((response: UserpickResponse) => {
        return response;
      }),
      catchError((error) => {
        console.error(error);
        alert(error.message);
        throw error;
      })
    );
  }
}
