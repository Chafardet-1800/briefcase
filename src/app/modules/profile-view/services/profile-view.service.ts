import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/contactForm.models';

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
   * @param emailData - Informacion del email
   */
  SendContactEmail(emailData: ContactForm): Observable<any> {

    return this.http.post( this.baseUrl + '/.netlify/functions/contactForm', emailData);

  }

}
