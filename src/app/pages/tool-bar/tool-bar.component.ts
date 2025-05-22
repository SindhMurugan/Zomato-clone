import { Component, DoCheck, inject } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ServiceService } from '../api/service.service';
import {MatBadgeModule} from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';
import { getData } from '../store/app.selector';
import { Store } from '@ngrx/store';
import { SingleItem, store} from '../stucture';

@Component({
  selector: 'app-tool-bar',
  imports: [SearchBarComponent,MatBadgeModule,RouterLink],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent  {
  service = inject(ServiceService)
  proficeSection:boolean =false
  getCradItem:SingleItem[] = []
 

  LogOut(){
    this.service.storage().set(null)
  }

  constructor(private store:Store<store> , private router:Router){
   this.store.select(getData).subscribe((data:any) => {

     this.getCradItem = data['item']['item']
      let index =0
      for(let i=0 ; i<= this.getCradItem.length-1;i++){
        if(this.getCradItem[index]['itemID'] != this.getCradItem[i]['itemID'] ){
          index +=1;
         this.getCradItem[index] = this.getCradItem[i]
        }
      }
      this.getCradItem = this.getCradItem.slice(0,index+1)

   })

   
    

   
  }
 
  openSignUp(bool:string):void{
    this.service.openSignUpPage(bool)
  }

  showCardItems(){
    if(!this.service.storage()){
      alert("please login")
    }
  }

  loggedOut():void{
    this.service.storage.set(null)
    this.router.navigate(['/home'])
  }
}
