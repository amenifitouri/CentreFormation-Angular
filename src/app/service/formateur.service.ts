import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Formateur } from '../model/formateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/formateurs';
  }

  public getListFormateur():Observable<Formateur[]>{
    return this.http.get<Formateur[]>('http://localhost:8090/formateurs/');
  }
   public addformateur(formateur:Formateur){
     return this.http.post('http://localhost:8090/domaine/add',formateur);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
