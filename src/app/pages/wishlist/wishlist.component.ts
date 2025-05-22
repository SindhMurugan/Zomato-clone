import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getData } from '../store/app.selector';
import { SingleItem, store} from '../stucture';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';
import { CustomDirectiveDirective } from '../custom-directive.directive';
import { BreadCrampsComponent } from '../bread-cramps/bread-cramps.component';
import { ServiceService } from '../api/service.service';
import { removeCardItem } from '../store/app.action';

@Component({
  selector: 'app-wishlist',
  imports: [CurrencyPipe,CustomDirectiveDirective,BreadCrampsComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent  {

  getCradItem = new Array()
  totalPrice = 0
  hash:any= {}

    constructor(private store:Store<store> , private dialog:MatDialog , private service:ServiceService){
   
      this.store.select(getData).subscribe((data:any) => {
        this.getCradItem = data['item']['item']
        
      });
      this.getCradItem =  this.getCradItem
      this.getCradItem.forEach((item:SingleItem)=> {
        const key:any = JSON.stringify(item)
        if( key in this.hash){
          this.hash[key] += this.hash[key]


        }else{
           this.hash[key] =1
        }
         this.totalPrice += item.price
        
        this.service.wishlist.set(Object.keys(this.hash).length)
        
      })
      
    }

    removeItem(item:SingleItem):void{
     
      const key =JSON.stringify(item)
      if(key in this.hash){
        this.hash[key] -=1
        if(this.hash[key] <=0){
          delete this.hash[key]
           this.store.dispatch(removeCardItem({item:item}))
        }
      }
      
   
       this.totalPrice -= item.price
      

    }
 

    pleaseOrder():void{
      this.dialog.open(LocationComponent , {
            width: '500px',
            height:'500px',
            data:"wish"
          })
    }

   get getKeys():any[]{
    console.log("99999",Object.keys(this.hash).map((value) => JSON.parse(value)))
    return Object.keys(this.hash).map((value) => JSON.parse(value))

    }

   getValues(item:object):number{
    const key =JSON.stringify(item)
    return  this.hash[key]
      
    }

}
