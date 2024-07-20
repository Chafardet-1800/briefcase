import { Component, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'briefcase';

  /**
   * Listener que se activa cuando se mueve el mouse sobre la pantalla
   * @param event valor ingresado
   */
  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) {

    // Buscamos el componente de sombra
    const target = document.getElementById('shadow_hover');

    // Si se encuentra el componente
    if (target) {
      // lo colocamos en el mouse
      target.style.top = event.clientY + 'px';
      target.style.left = event.clientX + 'px';
    }

  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ){
    // for (const [key, value] of Object.entries(sidenavIcons)) {
    //   this.matIconRegistry.addSvgIcon(
    //     // '<'+key.toLocaleLowerCase()+'>',
    //     key.toLocaleLowerCase(),
    //     this.domSanitzer.bypassSecurityTrustResourceUrl(value)
    //   );
    // }
  }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }
}
