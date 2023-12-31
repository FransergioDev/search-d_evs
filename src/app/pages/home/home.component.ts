import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title = environment.projectName;
  public mainTitle: String = "";
  public secondaryTitle: String = ""
  public userNameForSearch: String = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainTitle = this.title.split(" ")[0] || "";
    this.secondaryTitle = this.title.split(" ")[1] || "";
  }

  changeUserNameForSearch(userName: String) {
    this.userNameForSearch = userName;
  }

  navigateForSearchProfile(userName: String) {
    this.router.navigate(['/perfil', userName]);
  }
}
