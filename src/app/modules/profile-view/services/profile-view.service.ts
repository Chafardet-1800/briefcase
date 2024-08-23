import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProfileViewService {

  /**
   * Url Base del servicio
   */
  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = 'https://anibal-chafardet.netlify.app';

  }

  /**
   * Servicio para enviar el email de contacto
   */
  SendContactEmail(emailData: any): Observable<any> {

    return this.http.post( this.baseUrl + '/.netlify/functions/contactForm', emailData);

  }

}
