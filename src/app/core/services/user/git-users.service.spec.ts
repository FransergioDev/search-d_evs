import { TestBed } from '@angular/core/testing';
import { GitUsersService } from './git-users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environment/environment';
import { GitUser } from '../../models/GitUser';
import { UserResponseDefault } from '../../models/UserResponseDefault';

const apiURL = environment.githubUrlBase;

describe('GitUsersService', () => {
  let service: GitUsersService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitUsersService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GitUsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return a github user by username', () => {
    const userName = 'testedev';
    const urlGit = "https://github.com";
    const urlEndpoint = `${apiURL}/users/${userName}`;
    const dummyResponse: GitUser = {
      login: userName,
      id: 44898,
      node_id: '23',
      avatar_url: `${urlGit}/users/img/${userName}`,
      url: `${urlGit}/user/${userName}`,
      type: "User",
      name: 'userName',
      public_repos: 200,
      public_gists: 100,
      followers: 40,
      following: 50,
      created_at: new Date('2021-05-23'),
      updated_at: new Date(),
      html_url: `${urlGit}/${userName}`,
      subscriptions_url: undefined,
      organizations_url: undefined,
      received_events_url: undefined,
      site_admin: undefined,
      followers_url: `${urlGit}/users/img/${userName}/followers`,
      following_url: `${urlGit}/users/img/${userName}/following{/other_user}`,
    };

    service.getUser(userName).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpController.expectOne(urlEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('it should return default message when github username is not found', () => {
    const userName = '456456465@@#@!#!@#!@';
    const urlEndpoint = `${apiURL}/users/${userName}`;
    const dummyResponse: UserResponseDefault = {
      message: "Not Found",
      documentation_url: "https://docs.github.com/rest/users/users#get-a-user"
    };

    service.getUser(userName).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpController.expectOne(urlEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  afterEach(() => {
    httpController.verify();
  });

});
