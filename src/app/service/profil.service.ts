

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profil } from '../model/profil.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/profil';
  }

  public getListPays():Observable<Profil[]>{
    return this.http.get<Profil[]>('http://localhost:8090/profil/');
  }
   public addpays(profil:Profil){
     return this.http.post('http://localhost:8090/profil/add',profil);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
