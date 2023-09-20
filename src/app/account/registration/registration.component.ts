import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account/account.service';
import { ToasterService } from 'src/app/shared/service/toaster/toaster.service';
import { TokenService } from 'src/app/shared/service/token/token.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    private tokenService:TokenService,
    private accountService:AccountService,
    private toasterService:ToasterService,
    private router: Router
  ){}


  userForm = new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    dateOfBirth: new FormControl('',[Validators.required]),
    gender : new FormControl(0, [Validators.required]),
    address1 : new FormControl('',[Validators.required]),
    city : new FormControl('', [Validators.required]),
    state : new FormControl('', [Validators.required]),
    postalCode : new FormControl('', [Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(6)]),
    country : new FormControl('', [Validators.required]),
    mobileNo : new FormControl('', [Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10),Validators.minLength(10)]),
    password : new FormControl('',[Validators.required]),
    isActive : new FormControl(true),
  })

  onSubmit(data:any){
    console.log(data)
    
    this.accountService.Registration(data).subscribe((response:any)=>{
      console.log(response);
      
      if(response.isSuccess){
        this.toasterService.Toast.fire({ icon: 'success',title: response.message});
      }else{
        this.toasterService.Toast.fire({ icon: 'error',title: response.message});
      }
    })
    
  }
}
