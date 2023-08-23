import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { TitleTextComponent } from './components/title-text/title-text.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileDetailsComponent,
    TitleTextComponent,
    InputSearchComponent,
    DefaultButtonComponent,
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    HeaderComponent,
    ProfileDetailsComponent,
    TitleTextComponent,
    InputSearchComponent,
    RepositoriesComponent,
    DefaultButtonComponent,
  ]
})
export class SharedModule { }
