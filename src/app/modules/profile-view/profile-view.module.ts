import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { ProfileViewRountingModule } from './profile-view-rounting.module';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileViewRountingModule
  ]
})
export class ProfileViewModule { }
