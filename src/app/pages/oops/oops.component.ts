import { Component, inject } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Result } from '../stucture';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-oops',
  imports: [],
  templateUrl: './oops.component.html',
  styleUrl: './oops.component.css'
})
export class OopsComponent {

  serivice =inject(ServiceService)
  router = inject(Router)
  dialog= inject(MatDialogRef)

  deletAccount():void{
    this.serivice.deleteAccount().subscribe({
      next:(data:Result)=>{
        alert(data.message)
        this.serivice.storage.set(null)
        this.router.navigate(["/"])
        this.dialog.close()
      }
      
    })

  }

}
