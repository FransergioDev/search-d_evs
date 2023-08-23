import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GitRepository } from 'src/app/core/models/GitRepository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryComponent {
  @Input() repository: GitRepository | undefined;

  private datePeriods = {
    month: 30,
    week: 7,
    day: 1
  }

  private datePeriodsName = {
    week: ' semanas',
    day: ' dias',
    hours: ' horas'
  }

  calculateLastUpdate(date: string | undefined): string {
    let totalDays = 0;
    if (!date) return "";

    const now: Date = new Date();
    const updateDate: Date = new Date(date);
    const diferenceInMilliseconds =  now.getTime() - updateDate.getTime();
    let diff = diferenceInMilliseconds / (1000 * 3600 * 24)
    let totalHours = Math.ceil(diff)
    totalDays = Math.round(diff);

    if (this.datePeriods.month <= totalDays) return `Atualizado em ${updateDate.toLocaleDateString('pt-br')}`

    if (this.datePeriods.day <= totalDays) return `Última atualização em ${totalHours + this.datePeriodsName.hours}`

    return `Atualizado ${(totalDays < this.datePeriods.week) ? totalDays + this.datePeriodsName.day : Math.round(totalDays/this.datePeriods.week) + this.datePeriodsName.week}`
  }
}
