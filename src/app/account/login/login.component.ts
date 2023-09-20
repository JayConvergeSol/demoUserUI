import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account/account.service';
import { ToasterService } from 'src/app/shared/service/toaster/toaster.service';
import { TokenService } from 'src/app/shared/service/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private tokenService:TokenService,
    private accountService:AccountService,
    private toasterService:ToasterService,
    private router: Router
  ){}

  sendData(data:any){
    console.log(data);
    this.accountService.Login(data).subscribe((response :any) => {
      console.log(response)
      if(response.isSuccess)
      {
        this.toasterService.Toast.fire({ icon: 'success',title: response.message});
        this.tokenService.setToken(response.response.token,data.email);
        this.router.navigateByUrl("home");
      }
      else{
        this.toasterService.Toast.fire({ icon: 'error',title: response.message});
      }
    })

  }
}
