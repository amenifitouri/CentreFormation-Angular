import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='http://localhost:8090/users';
  }

  public getListUser():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8090/users/');
  }
   public adduser(User:User){
     return this.http.post('http://localhost:8090/users/add',User);
   }
   public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
}
public updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data)
}
}
