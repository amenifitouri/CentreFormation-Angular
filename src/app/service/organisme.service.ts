
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Organisme } from '../model/organisme.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OrganismeService {
  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/organisme';
  }

  public getListOrganisme():Observable<Organisme[]>{
    return this.http.get<Organisme[]>('http://localhost:8090/organisme/');
  }
   public addOrganisme(organisme:Organisme){
     return this.http.post('http://localhost:8090/organisme/add',organisme);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
