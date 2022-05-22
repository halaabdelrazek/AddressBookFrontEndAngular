import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { registerUser } from './Models/registerUser.model';
import { LoginUser } from "./Models/user.model";

@Injectable()
export class AuthService{

  baseURL: string = 'https://addressbookbyhala.azurewebsites.net/api/User';


  constructor(private http:HttpClient,private router: Router){}

  login(loginUser:LoginUser){
    return this.http.post<LoginUser>(this.baseURL+'/login',loginUser);
  }

  Register(newUser:registerUser){
    return this.http.post<registerUser>(this.baseURL+'/Register',newUser);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  
  getLoggedInUser(){
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
