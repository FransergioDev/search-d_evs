import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GitRepository } from 'src/app/core/models/GitRepository';
import { GitResponseDefault } from 'src/app/core/models/GitResponseDefault';
import { GitUser } from 'src/app/core/models/GitUser';
import { RepositoryService } from 'src/app/core/services/repository/repository.service';
import { SessionStorageService } from 'src/app/core/services/sessionStorage/sessionStorage';
import { GitUsersService } from 'src/app/core/services/user/git-users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{
  private routerParamsSubscription: Subscription | undefined;

  public user: GitUser| undefined;
  public repositories: GitRepository[] | undefined;
  public userNameForSearch: String = "";

  constructor (
    private route: ActivatedRoute,
    private gitUserService: GitUsersService,
    private gitRepositoryService: RepositoryService,
    private sessionStorageService: SessionStorageService) {}

  ngOnInit() {
    this.routerParamsSubscription = this.route.params.subscribe(params => {
      if (params && params['userName']) this.userNameForSearch = params['userName'];
      if (this.userNameForSearch && this.userNameForSearch.length > 0) this.search();
    });
  }

  ngOnDestroy() {
    if (this.routerParamsSubscription) this.routerParamsSubscription.unsubscribe();
  }

  search() {
    this.searchUserProfile();
    this.searchRepositoriesUserProfile();
  }

  async searchUserProfile() {
    const userLocalStorage = await this.sessionStorageService.getGitUserByUserName(this.userNameForSearch as string);

    if (userLocalStorage) {
      this.user = userLocalStorage;
      return;
    }

    const sub: Subscription = this.gitUserService.getUser(this.userNameForSearch).subscribe({
      next: (response: GitUser | GitResponseDefault) => {
        const containsNameUser = ((response as GitUser).name.length > 0);
        this.user = (containsNameUser) ? (response as GitUser) : undefined;
        if (this.user) this.sessionStorageService.setGitUserByUserName(this.userNameForSearch as string, this.user);
        sub.unsubscribe();
      },
      error: (e) => (console.error(e), sub.unsubscribe())
    });
  }

  async searchRepositoriesUserProfile() {
    const repositoriesLocalStorage = await this.sessionStorageService.getRepositoriesByUserName(this.userNameForSearch as string);

    if (repositoriesLocalStorage) {
      this.repositories = repositoriesLocalStorage;
      console.log("repo", this.repositories);
      return;
    }

    const sub: Subscription = this.gitRepositoryService.getRepositoriesByUserName(this.userNameForSearch).subscribe({
      next: (response: GitRepository[] | GitResponseDefault) => {
        const containsNameUser = ((response as GitRepository[])[0].id && (response as GitRepository[]).length > 0);
        this.repositories = (containsNameUser) ? (response as GitRepository[]) : undefined;
        console.log("repo", this.repositories);
        if (this.repositories) this.sessionStorageService.setRepositoriesByUserName(this.userNameForSearch as string, this.repositories);
        sub.unsubscribe();
      },
      error: (e) => (console.error(e), sub.unsubscribe())
    });
  }

  eventClickContact() {
    window.open(this.user?.html_url.toString(), '_black');
  }
}
