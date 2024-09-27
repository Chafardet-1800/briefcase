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
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu'
import { CmmButtonComponent } from './components/buttons/button/button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ScrollNavbarComponent,
    CmmInputEmailComponent,
    CmmInputTextComponent,
    CmmInputSelectComponent,
    CmmNumberFormatDirective,
    CmmAlphaNumericFormatDirective,
    CmmButtonComponent,
    CmmToastrComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    ScrollNavbarComponent,
    CmmInputEmailComponent,
    CmmInputTextComponent,
    CmmInputSelectComponent,
    CmmNumberFormatDirective,
    CmmAlphaNumericFormatDirective,
    CmmButtonComponent,
    CmmToastrComponent
  ]
})
export class SharedModule { }
