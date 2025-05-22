import { Component, Inject, inject } from '@angular/core';
import { AddNewUser, LogIn, Result } from '../stucture';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { ServiceService } from '../api/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule , NgClass ,NgStyle],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  addNewUser:AddNewUser = new AddNewUser()
  apiCallReq = inject(ServiceService)
  logInExistingUser:LogIn = new LogIn()
  

  constructor(
    public dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.signUp == 'edit'){
        this.addNewUser = this.apiCallReq.storage()
      }
      console.log(data,this.addNewUser , 'data')
      
     }

  newUserAdded(form:NgForm):void{
    this.apiCallReq.addNewUser(this.addNewUser).subscribe({
      next:(data:Result)=>{
        if(data.result){
          alert(data.message)
          this.apiCallReq.storage.set(data.data)
          this.dialogRef.close()
          form.reset()
        }
        else{
          alert(data.message)
          form.reset()
        }
      },
      error:()=>{}
    })

  }

  userLoggedIn(form:NgForm):void{
    this.apiCallReq.login(this.logInExistingUser).subscribe({
      next:(data:Result)=>{
        if(data.result){
          alert(data.message)
          this.apiCallReq.storage.set(data.data)
          this.dialogRef.close()
          form.reset()
        }
        else{
          alert(data.message)
          form.reset()
        }
      },
      error:(err)=>{
        console.log(err , 'err')
      }
    })
  }

  clearForm(form:NgForm):void{
    this.dialogRef.close()
  }

  updateUser(form:NgForm){
    this.apiCallReq.updatewUser(this.addNewUser).subscribe({
      next:(data:Result)=>{
        if(data.result){
          alert(data.message)
          this.apiCallReq.storage.set(data.data)
          this.dialogRef.close()
          form.reset()
        }
        else{
          alert(data.message)
          form.reset()
        }
      },
      error:()=>{}
    })
  }

}
