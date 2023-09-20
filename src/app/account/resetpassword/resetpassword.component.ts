import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from 'src/app/shared/service/account/account.service';
import { ToasterService } from 'src/app/shared/service/toaster/toaster.service';
import { TokenService } from 'src/app/shared/service/token/token.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

  email = location.href.split("?")[1].split("=")[1];
  
  constructor(
    private tokenService:TokenService,
    private accountService:AccountService,
    private toasterService:ToasterService
  ){}

  sendData(data:any){
    
    if(data.confirmPassword == data.newPassword){
      this.accountService.ResetPassword(data).subscribe((response:any)=>{
        console.log(response);
        if(response.isSuccess){
          this.toasterService.Toast.fire({ icon: 'success',title: response.message});
        }else{
          this.toasterService.Toast.fire({ icon: 'error',title: response.message});
        }
      })
    }
    else{
      this.toasterService.Toast.fire({ icon: 'error',title: "Password and confirm password does not match"});
    }
  }
}
