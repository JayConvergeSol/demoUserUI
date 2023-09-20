import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenService } from '../token/token.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http:HttpClient,
    private tokenService: TokenService
  ) { }

  baseUrl = "http://localhost:5098/api/Account/";

  Registration(data:any){
    return this.http.post(`${this.baseUrl}Registration`,data,{responseType:'json'});
  }

  Login(data:any){
    return this.http.post(`${this.baseUrl}SignIn`,data);
  }

  ChangePassword(data:any){
    let headers = new HttpHeaders({"Authorization" : 'Bearer '+ this.tokenService.getToken()})
    return this.http.post(`${this.baseUrl}ChangePassword`,data,{ headers });
  }

  ForgetPassword(email:any){
    return this.http.post(`${this.baseUrl}ForgetPassword?email=${email}`,null);
  }

  ResetPassword(data:any){
    return this.http.post(`${this.baseUrl}ResetPassword`,data);
  }
  

  

}
