import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultButtonComponent {
  @Input() label: String = 'Default';
  @Output() eventClick: EventEmitter<void> = new EventEmitter();

  clickButton() {
    this.eventClick.emit();
  }
}
