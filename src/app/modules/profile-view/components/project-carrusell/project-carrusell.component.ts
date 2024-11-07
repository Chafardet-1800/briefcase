import { Component } from '@angular/core';
import { meteorologistImg, movieappImg, supermarketImg, taskmanagerImg, usermanagementImg } from 'src/assets/images/images-routes';

@Component({
  selector: 'cmp-project-carrusell',
  templateUrl: './project-carrusell.component.html',
  styleUrls: ['./project-carrusell.component.scss']
})
export class ProjectCarrusellComponent {

  projectList: {
    url: string,
    title: string,
    description: string,
    image: string,
  }[] = [
    {
      url: 'https://supermarket-store.netlify.app',
      title: 'Supermarket',
      description: 'Supermercado digital',
      image: supermarketImg
    },
    {
      url: 'https://deluxe-sundae-c7b114.netlify.app',
      title: 'User Manager',
      description: 'Manejador de usuarios',
      image: usermanagementImg
    },
    {
      url: 'https://majestic-marigold-0b5704.netlify.app',
      title: 'Meteorólogo',
      description: 'Aplicación de meteorología',
      image: meteorologistImg
    },
    {
      url: 'https://github.com/Chafardet-1800/Movies_APP',
      title: 'Movie App',
      description: 'Aplicacion de peliculas',
      image: movieappImg
    },
    {
      url: 'https://task-manager-3oh4ek3kn-chafardet1800s-projects.vercel.app/?vercelToolbarCode=JY1-9mfj2r0L_R6',
      title: 'Task Manager',
      description: 'Manejador de tareas y proyectos',
      image: taskmanagerImg
    },
  ]
}
