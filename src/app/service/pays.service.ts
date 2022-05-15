
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pays } from '../model/pays.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PaysService {
  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/pays';
  }

  public getListPays():Observable<Pays[]>{
    return this.http.get<Pays[]>('http://localhost:8090/pays/');
  }
   public addpays(pays:Pays){
     return this.http.post('http://localhost:8090/pays/add',pays);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
