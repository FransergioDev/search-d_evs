import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { TitleTextComponent } from './components/title-text/title-text.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';

@NgModule({
  declarations: [
    TitleTextComponent,
    InputSearchComponent,
    DefaultButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    TitleTextComponent,
    InputSearchComponent,
    DefaultButtonComponent,
  ]
})
export class SharedModule { }
