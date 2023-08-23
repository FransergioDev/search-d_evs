import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private title = environment.projectName;

  @Input() userNameForSearch: String = "";

  public mainTitle: String = "";
  public secondaryTitle: String = ""

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
