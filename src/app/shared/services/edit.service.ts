import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
@Injectable()
export class EditService {
  constructor(private http: HttpClient){}

  deleteUser(id: any): Observable<User>
  {
      return this.http.delete<User>(`http://localhost:3000/users/${id}`)
  }

  updateUser(data:User)
  {
      return this.http.put(`http://localhost:3000/users/${data.id}`, data)
      .pipe(map((user:any)=> user[0]? user[0]: undefined))
  }
}