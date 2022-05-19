import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "./Models/user.model";

@Injectable()
export class AuthService{

  constructor(private http:HttpClient){}

  login(user:User){
    return this.http.post<User>('http://localhost:3000/login',user);
  }
}
