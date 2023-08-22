import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitRepository } from '../../models/GitRepository';
import { GitResponseDefault } from '../../models/GitResponseDefault';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiUrl = environment.githubUrlBase;

  constructor(private httpClient: HttpClient) { }

  getRepositorysByUserName(userName: String): Observable<GitRepository[]|GitResponseDefault> {
    const url = `${this.apiUrl}/users/${userName}/repos`;
    return this.httpClient.get<GitRepository[]|GitResponseDefault>(url);
  }
}
