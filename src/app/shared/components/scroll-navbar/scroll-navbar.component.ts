import { Component } from '@angular/core';
import { angularIcon, backgroundLines, bootstrapIcon, cssIcon, dartIcon, figmaIcon, flutterIcon, htmlIcon, javascriptIcon, nextjsIcon, reactIcon, typescriptIcon } from 'src/assets/images/images-routes';

@Component({
  selector: 'shd-scroll-navbar',
  templateUrl: './scroll-navbar.component.html',
  styleUrls: ['./scroll-navbar.component.scss']
})
export class ScrollNavbarComponent {

  /**
   * Url de las imagenes
   */
  backgroundLines: string = backgroundLines;

  /**
   * Arreglo de lenguajes de programación
   */
  skillsArray: {
    name: string,
    imgurl: string
  }[] = [
    {
      name: 'HTML',
      imgurl: htmlIcon
    },
    {
      name: 'CSS',
      imgurl: cssIcon
    },
    {
      name: 'JAVASCRIPT',
      imgurl: javascriptIcon
    },
    {
      name: 'TYPESCRIPT',
      imgurl: typescriptIcon
    },
    {
      name: 'ANGULAR',
      imgurl: angularIcon
    },
    {
      name: 'REACT',
      imgurl: reactIcon
    },
    {
      name: 'NEXTJS',
      imgurl: nextjsIcon
    },
    {
      name: 'BOOTSTRAP',
      imgurl: bootstrapIcon
    },
    {
      name: 'FLUTTER',
      imgurl: flutterIcon
    },
    {
      name: 'DART',
      imgurl: dartIcon
    },
    {
      name: 'FIGMA',
      imgurl: figmaIcon
    }
  ]

}
