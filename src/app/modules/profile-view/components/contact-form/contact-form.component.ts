import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CmmComponentFormModel } from 'src/app/shared/models/form.model';
import { ProfileViewService } from '../../services/profile-view.service';
import { CmmToastrComponent } from 'src/app/shared/components/dialogs/toastr/toastr.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CmmAlertModalModel } from 'src/app/shared/models/dialogs.model';
import { personalProfile } from 'src/assets/images/images-routes';

@Component({
  selector: 'cmp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements CmmComponentFormModel {

  /**
   * Imagenes
   */
  personalProfile: string = personalProfile;

  //? Lógica de lifecicle

  /**
   * Desactiva la subscripción de observables
   */
  $unsubscribe: Subject<void> = new Subject();

  //? Variables del form

  /**
   * Formulario en el que se trabajará (Aplica si el form es de más de un input)
   */
  componentForm!: FormGroup;

  //? Informacion util para el formulario

  /**
   * Listado de opciones para los posibles asuntos
   */
  selectList: any[] = [
    {value: "Propuesta de trabajo"},
    {value: "Iniciar un proyecto juntos"},
    {value: "Hacer un encargo"},
  ]


  constructor(
    private profileViewService: ProfileViewService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    // Ejecutamos al funcion para armar lso filtros
    this.createForm();

  }

  /**
   * Inicializa el componentForm
   */
  createForm() {

    // Creo el formulario con el constructor agregando los controles necesarios
    this.componentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      affair: ['', Validators.required],
      message: ['', Validators.required],
    });

  };

  /**
   * Aquí nos suscribimos a los cambios del form
   */
  listenFormChanges(){
  };

  /**
   * Valida el formulario y decide si puede enviarse al endpoint
   * En el error ejecutamos CmmdataService.CmmSetApiError con el objeto de error del formulario
   */
  onSubmit(){

    this.componentForm.markAllAsTouched();

    if(!this.componentForm.valid) return;

    this.profileViewService.SendContactEmail(this.componentForm.value)
    .pipe(takeUntil(this.$unsubscribe))
    .subscribe({
      next: (response) => {

        // Armamos la data de la alerta
        const messagesData: CmmAlertModalModel = {
          title: response,
          text: '',
          giftData: '',
          typeIcon: 'success',
          showCancelButton: false,
          showConfirmButton: true,
          cancelButtonText: '',
          confirmButtonText: 'Aceptar',
        }

        // Abrimos el componente predeterminado con la data suministrada
        this.snackbar.openFromComponent(CmmToastrComponent, {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          data: messagesData,
          duration: 3000,
          panelClass: ['alertPrincipalStyle'],
        });

      },
      error: (err) => {console.log('Error:',err)}
    })

  }

  /**
   * Ejecutamos el $unsubscribe
   */
  ngOnDestroy(){

  };

}
