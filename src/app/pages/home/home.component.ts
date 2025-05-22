import { Component, effect, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterModule } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule , SearchBarComponent , RouterLink,RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dialog = inject(MatDialog)
  service = inject(ServiceService)

  openSignUpPage(bool:string):void{
    this.service.openSignUpPage(bool)
    // let dialogRef = this.dialog.open(LoginPageComponent, {
    //   width: '400px',
    //   data: { signUp:bool}
    // });
  }

  constructor(){
    effect(()=> {
      console.log(this.service.storage() , '000000')
    })
  }

  LogOut(){
    this.service.storage.set(null)
    
  }

}
