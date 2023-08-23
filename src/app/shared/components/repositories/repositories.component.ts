import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GitRepository } from 'src/app/core/models/GitRepository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  @Input() repositories: GitRepository[] | undefined = [];
}
