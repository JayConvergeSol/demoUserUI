import { Component } from '@angular/core';
import { AccountService } from 'src/app/shared/service/account/account.service';
import { ToasterService } from 'src/app/shared/service/toaster/toaster.service';
import { TokenService } from 'src/app/shared/service/token/token.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  
  constructor(
    private toasterService : ToasterService,
    private accountService: AccountService,
    private tokenService: TokenService
    ){}
    email = this.tokenService.getEmail();
    
  sendData(data:any){
    console.log(data)
    if(data.confirmPassword == data.newPassword){
      this.accountService.ChangePassword(data).subscribe((response:any)=>{
        console.log(response);
        if(response.isSuccess){
          this.toasterService.Toast.fire({ icon: 'success',title: response.message});
        }else{
          this.toasterService.Toast.fire({ icon: 'error',title: response.message});
        }
      })
    }else{
      this.toasterService.Toast.fire({ icon: 'error',title: "Password and confirm password does not match"});
    }
  }
}
