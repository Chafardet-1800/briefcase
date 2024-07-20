import { Component } from '@angular/core';
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
