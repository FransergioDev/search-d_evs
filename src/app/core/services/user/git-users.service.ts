import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { GitUser } from '../../models/GitUser';
import { GitResponseDefault } from '../../models/GitResponseDefault';


@Injectable({
  providedIn: 'root'
})
export class GitUsersService {
  private apiUrl = environment.githubUrlBase;

  constructor(private http: HttpClient) { }

  getUser(userName: String): Observable<GitUser|GitResponseDefault> {
    const url = `${this.apiUrl}/users/${userName}`;
    return this.http.get<GitUser|GitResponseDefault>(url);
  }
}
