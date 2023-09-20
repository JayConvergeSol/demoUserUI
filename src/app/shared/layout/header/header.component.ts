import { Component } from '@angular/core';
import { AccountService } from '../../service/account/account.service';
import { TokenService } from '../../service/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private accountService:AccountService,
    private tokenService:TokenService,
    private http : Router
  ){}
  ngOnInit(): void {
    localStorage.getItem("token") == undefined ? this.http.navigateByUrl("login"): '';
  }

  Logout(){
    this.tokenService.clearToken();
    this.http.navigateByUrl("login");
  }
}
