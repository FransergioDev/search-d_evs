import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title = "Search d_evs";
  public mainTitle: String = "";
  public secondaryTitle: String = ""
  public userNameForSearch: String = "";

  constructor(private route: Router) {

  }

  ngOnInit(): void {
    this.mainTitle = this.title.split(" ")[0] || "";
    this.secondaryTitle = this.title.split(" ")[1] || "";
  }

  changeUserNameForSearch(userName: String) {
    this.userNameForSearch = userName;
  }

  navigateForSearchProfile(userName: String) {
    this.route.navigate([`/perfil/${userName}`])
  }
}
