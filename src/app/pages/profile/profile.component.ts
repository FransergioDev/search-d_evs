import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GitResponseDefault } from 'src/app/core/models/GitResponseDefault';
import { GitUser } from 'src/app/core/models/GitUser';
import { SessionStorageService } from 'src/app/core/services/localstorage/sessionStorage';
import { GitUsersService } from 'src/app/core/services/user/git-users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{
  private routerParamsSubscription: Subscription | undefined;

  public user: GitUser| undefined;
  public userNameForSearch: String = "";

  constructor (private route: ActivatedRoute, private gitUserService: GitUsersService, private sessionStorageService: SessionStorageService) {}

  ngOnInit() {
    this.routerParamsSubscription = this.route.params.subscribe(params => {
      if (params && params['userName']) this.userNameForSearch = params['userName'];
      if (this.userNameForSearch && this.userNameForSearch.length > 0) this.searchUserProfile();
    });
  }

  ngOnDestroy() {
    if (this.routerParamsSubscription) this.routerParamsSubscription.unsubscribe();
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

  eventClickContact() {
    window.open(this.user?.html_url.toString(), '_black');
  }
}
