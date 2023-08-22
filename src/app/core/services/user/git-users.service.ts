import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { GitUser } from '../../models/GitUser';
import { UserResponseDefault } from '../../models/UserResponseDefault';


@Injectable({
  providedIn: 'root'
})
export class GitUsersService {
  private apiUrl = environment.githubUrlBase;

  constructor(private http: HttpClient) { }

  getUser(userName: String): Observable<GitUser|UserResponseDefault> {
    console.log('api',this.apiUrl);
    const url = `${this.apiUrl}/users/${userName}`;
    console.log('api url',url);
    return this.http.get<GitUser|UserResponseDefault>(url);
  }
}
