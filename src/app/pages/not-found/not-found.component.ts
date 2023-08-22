import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public title: String = '4☹4';
  public subTitle:String = 'Page Not Found';

  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
