import { Component } from '@angular/core';

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
      date: '2021 - 2022',
      event: 'Academlo',
      subEvent: 'Estudios de programacion',
      description: 'En este año me prepare y forme como programador bajo la tutela de la academia de ciencias y computacion de Academlo. Fue un año en el que estudie las bases del desarrollo web asi como los fundamentos para hacer aplicaciones web, tanto el frontend como el backend, aprendiendo en el proceso React, Vuejs, Bosttrap y Nodejs.'
    },
    {
      date: '2022 - 2024',
      event: 'Chinchin',
      subEvent: 'Programador Frontend Jr',
      description: 'Durante este periodo de tiempo tuve la suerte y la oportunidad de capacitarme y trabajar como programador frontent en la empresa Chinchin. En esta empresa me desenpeñe como solucionador de errores, maquetador de vistas, desarrollador de productos, capacitador y presentador en el uso de los productos de Chinchin. Durante mi tiempo en esta empreza me capacite en el uso de las tecnologías Angular, Figma, Material, GitLab, etc.'
    },
    {
      date: 'Presente',
      event: 'Confiao',
      subEvent: 'Programador y lider de Frontend',
      description: 'En la actualidad me encuentro trabajando con el equipo tegnologico Confiao, en el desarrollo de una aplicacion movile de pago en cuotas y el backOffices. Entre mis labores se encuentran la estructuracion y desarrollo de los proyectos que componen el Frontend. Para el cumplimiento de mis tareas me he capacitado tanto en la metodologia Scrum como en las tegnologias Flutter, Dart, NextJs, Github, etc.'
    },
  ];

  /**
   * Timeline seleccionada
   */
  timelineSelected: any = this.timelineList[0];

}
