import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Session } from '../model/session.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/session';
  }

  public getListSession():Observable<Session[]>{
    return this.http.get<Session[]>('http://localhost:8090/session/');
  }
   public addSession(session:Session){
     return this.http.post('http://localhost:8090/session/add',session);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}

getbyid(id:any){
  return this.http.get<any>(this.baseUrl +'/'+ id);
}
}
