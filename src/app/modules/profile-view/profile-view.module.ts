import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { ProfileViewRountingModule } from './profile-view-rounting.module';
import { ProjectCarrusellComponent } from './components/project-carrusell/project-carrusell.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProjectCarrusellComponent,
    TimelineComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ProfileViewRountingModule
  ]
})
export class ProfileViewModule { }
