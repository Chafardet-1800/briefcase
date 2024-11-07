import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'cmp-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  /**
   * Listados de fechas y eventos
   */
  timelineList: any[] = [
    {
      id: '1',
      date: '2021 - 2022',
      event: 'Academlo',
      subEvent: 'Estudios de programación',
      description: 'En este año me prepare y forme como programador bajo la tutela de la academia de ciencias y computación de Academlo. Fue un año en el que estudie las bases del desarrollo web así como los fundamentos para hacer aplicaciones web, tanto el frontend como el backend, aprendiendo en el proceso React, Vuejs, Bosttrap y Nodejs'
    },
    {
      id: '2',
      date: '2022 - 2024',
      event: 'Chinchin',
      subEvent: 'Programador Frontend Jr',
      description: 'Durante este periodo de tiempo tuve la suerte y la oportunidad de capacitarme y trabajar como programador frontent en la empresa Chinchin. En esta empresa me desempeñe como solucionador de errores, maquetador de vistas, desarrollador de productos, capacitador y presentador en el uso de los productos de Chinchin. Durante mi tiempo en esta empresa me capacite en el uso de las tecnologías Angular, Figma, Material, GitLab, etc.'
    },
    {
      id: '3',
      date: 'Presente',
      event: 'Confiao',
      subEvent: 'Programador y lider de Frontend',
      description: 'En la actualidad me encuentro trabajando con el equipo tecnológico Confiao, en el desarrollo de una aplicación móvil de pago en cuotas y el backOffices. Entre mis labores se encuentran la estructuración y desarrollo de los proyectos que componen el Frontend. Para el cumplimiento de mis tareas me he capacitado tanto en la metodología Scrum como en las tecnologías Flutter, Dart, NextJs, Github, etc.'
    },
  ];

  /**
   * Timeline seleccionada
   */
  timelineSelected: any = this.timelineList[0];
 //? Lógica de lifecicle

  /**
   * Desactiva la subscripción de observables
   */
  $unsubscribe: Subject<void> = new Subject();

  //? Variables del form

  /**
   * Formulario en el que se trabajará (Aplica si el form es de más de un input)
   */
  componentInput!: FormControl;

  constructor(
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
    this.componentInput = new FormControl(this.timelineList[0].id);

  };

  /**
   * Funcion para cambiar a fecha seleccionada
   */
  changeTimeline() {
    console.log(this.componentInput.value);

    this.timelineSelected = this.timelineList.find(timeline => timeline.id == this.componentInput.value);
  }
}
