import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Domaine } from '../model/domaine.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/domaine';
  }

  public getListDomaine():Observable<Domaine[]>{
    return this.http.get<Domaine[]>('http://localhost:8090/domaine/');
  }
   public adddomaine(domaine:Domaine){
     return this.http.post('http://localhost:8090/domaine/add',domaine);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
