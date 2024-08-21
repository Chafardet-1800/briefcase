import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNavbarComponent } from './components/scroll-navbar/scroll-navbar.component';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CmmInputEmailComponent } from './components/inputs/input-email/input-email.component';
import { CmmInputTextComponent } from './components/inputs/input-text/input-text.component';
import { CmmInputSelectComponent } from './components/inputs/input-select/input-select.component';
import { FormsModule } from '@angular/forms';
import { CmmNumberFormatDirective } from './directives/number-format.directive';
import { CmmAlphaNumericFormatDirective } from './directives/alpha-numeric-format.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { CmmToastrComponent } from './components/dialogs/toastr/toastr.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ScrollNavbarComponent,
    CmmInputEmailComponent,
    CmmInputTextComponent,
    CmmInputSelectComponent,
    CmmNumberFormatDirective,
    CmmAlphaNumericFormatDirective,
    CmmToastrComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    ScrollNavbarComponent,
    CmmInputEmailComponent,
    CmmInputTextComponent,
    CmmInputSelectComponent,
    CmmNumberFormatDirective,
    CmmAlphaNumericFormatDirective,
    CmmToastrComponent
  ]
})
export class SharedModule { }
