import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  /**
   * Listado de lenguajes de programación
   */
  skillsList: any[] = [
    {
      name: 'HTML',
      imgurl: ''
    },
    {
      name: 'JavaScript',
      imgurl: ''
    },
    {
      name: 'CSS',
      imgurl: ''
    },
    {
      name: 'Angular',
      imgurl: 'https://w7.pngwing.com/pngs/271/444/png-transparent-angular-icon-hd-logo.png'
    },
    {
      name: 'TypeScript',
      imgurl: ''
    },
    {
      name: 'Botstrap',
      imgurl: ''
    },
    {
      name: 'Material',
      imgurl: ''
    },
    {
      name: 'Flutter',
      imgurl: ''
    },
    {
      name: 'Dart',
      imgurl: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
