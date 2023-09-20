import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account/account.service';
import { ToasterService } from 'src/app/shared/service/toaster/toaster.service';
import { TokenService } from 'src/app/shared/service/token/token.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  
  isLoading = false;

  constructor(
    private tokenService:TokenService,
    private accountService:AccountService,
    private toasterService:ToasterService,
    private router: Router
  ){}

  sendData(email:any){
    this.isLoading = true;
    this.accountService.ForgetPassword(email).subscribe((response:any)=>{
      console.log(response);
      if(response.isSuccess){
        this.router.navigateByUrl("resetPass?email="+email);
        this.toasterService.Toast.fire({ icon: 'success',title: response.message});
      }else{
        this.toasterService.Toast.fire({ icon: 'error',title: response.message});
      }
      this.isLoading = false;
    });
  }
}
