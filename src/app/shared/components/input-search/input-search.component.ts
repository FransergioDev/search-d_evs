import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent {
  @Input() loading: Boolean = false;
  @Input() valueSearch: String = "";
  @Output() search: EventEmitter<String> = new EventEmitter();
  @Output() eventEnter: EventEmitter<void> = new EventEmitter();

  private timeRef: ReturnType<typeof setTimeout> | undefined;

  changeSearch(event: Event) {
    event.preventDefault();
    this.emitterValueSearch();
  }

  keypressEnter() {
    this.emitterValueSearch(0);
    this.eventEnter.emit();
  }

  private emitterValueSearch(timeoutValue: number = 20) {
    if (this.timeRef) clearTimeout(this.timeRef);
    this.timeRef = setTimeout(() => this.search.emit(this.valueSearch), timeoutValue);
  }
}
