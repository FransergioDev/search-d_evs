import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitResponseDefault } from 'src/app/core/models/GitResponseDefault';
import { GitUser } from 'src/app/core/models/GitUser';
import { GitUsersService } from 'src/app/core/services/user/git-users.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailsComponent {
  @Input() user: GitUser| undefined;
  @Output() eventClickContact: EventEmitter<void> = new EventEmitter();

  eventClick() {
    this.eventClickContact.emit();
  }
}
