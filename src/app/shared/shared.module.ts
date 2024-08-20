import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNavbarComponent } from './components/scroll-navbar/scroll-navbar.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ScrollNavbarComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    ScrollNavbarComponent
  ]
})
export class SharedModule { }
