import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent {
  @Input() main: String = "";
  @Input() secondary: String = "";
}
