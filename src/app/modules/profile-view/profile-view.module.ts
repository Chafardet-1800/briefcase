import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { ProfileViewRountingModule } from './profile-view-rounting.module';
import { ProjectCarrusellComponent } from './components/project-carrusell/project-carrusell.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProjectCarrusellComponent,
    TimelineComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileViewRountingModule,
    SharedModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule
  ]
})
export class ProfileViewModule { }
