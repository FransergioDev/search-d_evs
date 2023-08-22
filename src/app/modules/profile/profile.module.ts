import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }
