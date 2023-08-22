import { TestBed } from '@angular/core/testing';
import { RepositoryService } from './repository.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitRepository } from '../../models/GitRepository';
import { environment } from 'src/environment/environment';
import { GitResponseDefault } from '../../models/GitResponseDefault';

const apiURL = environment.githubUrlBase;

describe('RepositoryService', () => {
  let service: RepositoryService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RepositoryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("it should return a repository's github user by username", () => {
    const userName = 'testedev';
    const projectsName = 'Project ';
    const urlGit = "https://github.com";
    const urlEndpoint = `${apiURL}/users/${userName}/repos`;
    const dummyResponse: GitRepository[] = [
      {
        id: 20344,
        node_id: "32465472322S#S@",
        name: `${projectsName}1`,
        full_name: `${userName}/${projectsName}1`,
        private: false,
        html_url: `${urlGit}/${userName}/${projectsName}1`,
        description: 'Teste',
        created_at: new Date("2020-03-02"),
        updated_at: new Date(),
        stargazers_count: 20
      },
      {
        id: 20344,
        node_id: "32465472322S#S@",
        name: `${projectsName}2`,
        full_name: `${userName}/${projectsName}2`,
        private: false,
        html_url: `${urlGit}/${userName}/${projectsName}2`,
        description: 'Teste2',
        created_at: new Date("2020-03-02"),
        updated_at: new Date(),
        stargazers_count: 20
      }
    ];

    service.getRepositorysByUserName(userName).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpController.expectOne(urlEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('it should return default message when github username is not found', () => {
    const userName = '456456465@@#@!#!@#!@';
    const urlEndpoint = `${apiURL}/users/${userName}/repos`;
    const dummyResponse: GitResponseDefault = {
      message: "Not Found",
      documentation_url: "https://docs.github.com/rest/repos/repos#list-repositories-for-a-user"
    };

    service.getRepositorysByUserName(userName).subscribe(response => {
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
