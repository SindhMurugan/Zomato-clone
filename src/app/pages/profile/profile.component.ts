import { Component, inject } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { AddNewUser, Result } from '../stucture';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';
import { OopsComponent } from '../oops/oops.component';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-profile',
  imports: [CurrencyPipe , DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  service = inject(ServiceService)
  addAddress:string = ''
  getAllOrdersList = new Array()

  constructor(private dialog:MatDialog){}

  openSignUpPage(bool:string):void{
   
    // console.log("pppp" , update)
    this.service.openSignUpPage(bool , "600px")
   
  }

  detectLocation(){
    this.dialog.open(LocationComponent , {
      width: '700px',
      maxWidth: 'none',
      height:'800px',
      data:"address"
    })

  }

    getAllOrders():void{
      this.addAddress = "orders"
  this.service.getAllPreviousOrders().subscribe({
    next:(data:Result)=>{
      this.getAllOrdersList = data.data
    }
  })
    }


  deleteAccount():void{
    this.dialog.open(OopsComponent , {
      width: '500px',
   
      // height:'500px',
    })
  }
}
