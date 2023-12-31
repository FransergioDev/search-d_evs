import { Injectable } from "@angular/core";
import { GitUser } from "../../models/GitUser";
import { GitRepository } from "../../models/GitRepository";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getGitUserByUserName(userName: string): Promise<GitUser|null> {
    return new Promise((resolve) => {
      if (!userName) resolve(null);

      try {
        let data = sessionStorage.getItem(userName);
        resolve((data) ? JSON.parse(data) as GitUser : null);
      } catch (error) {
        resolve(null);
      }
    });
  }

  setGitUserByUserName(userName: string, gitUser: GitUser) {
    sessionStorage.setItem(userName, JSON.stringify(gitUser));
  }

  getRepositoriesByUserName(userName: string): Promise<GitRepository[]|null> {
    return new Promise((resolve) => {
      if (!userName) resolve(null);

      try {
        let data = sessionStorage.getItem(`${userName}:repos`);
        resolve((data) ? JSON.parse(data) as GitRepository[] : null);
      } catch (error) {
        resolve(null);
      }
    });
  }

  setRepositoriesByUserName(userName: string, repositories: GitRepository[]) {
    sessionStorage.setItem(`${userName}:repos`, JSON.stringify(repositories));
  }
}
