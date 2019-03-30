import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {
  baseurl: 'localhost:8080/enregistrement'

  constructor(private http: HttpClient) { }

   getListeFemme(): Observable<any>{

     return  this.http.get(this.baseurl);
   }
  }
