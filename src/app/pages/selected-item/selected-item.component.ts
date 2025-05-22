import { Component, inject, OnInit } from '@angular/core';

import { NgClass } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnakeBarComponent } from '../snake-bar/snake-bar.component';
import { ServiceService } from '../api/service.service';
import { AddToCard, Result ,SingleItem,store} from '../stucture';
import { Store } from '@ngrx/store';
import { storeCardItemAction } from '../store/app.action';
import { getData, selectorGet } from '../store/app.selector';
import { RouterLink } from '@angular/router';
import { BreadCrampsComponent } from '../bread-cramps/bread-cramps.component';

@Component({
  selector: 'app-selected-item',
  imports: [  NgClass , RouterLink , BreadCrampsComponent],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent implements OnInit{

  itemLikedByuser = false
  service = inject(ServiceService)
  getCradItem =new Array()
  addToCardDeatils:AddToCard = new AddToCard()
  hash:any ={}
  // selectedItem = new Set()

constructor(public snackBar: MatSnackBar , private store:Store<store>){}
  ngOnInit(): void {
    // this.store.select(getData).subscribe((data:any) => {
    //     this.getCradItem = data['item']['item']
    //     console.log("Cart Items:", data ); // ✅ Log actual data
    //   });

    //   console.log("oooooo" , this.selectedItem)
  }

count =0
openSnackBar(item:SingleItem) {
  this.snackBar.openFromComponent(SnakeBarComponent, {
    duration: 500,
    panelClass: ['custom-snackbar']
    
  });

  if(this.service.storage()){
    // this.selectedItem.add(item)
     
    this.store.dispatch(storeCardItemAction({item:item}))
    // this.selectedItem.concat(item)
    // this.wishlistCount()
  }
}

// wishlistCount(){
//   this.selectedItem.forEach((item)=>{
//      const key:any = JSON.stringify(item)
//         if( key in this.hash){
//           this.hash[key] += this.hash[key]


//         }else{
//            this.hash[key] =1
//         }
//         console.log("ppppp" , Object.keys(this.hash) ,  this.selectedItem)
//       this.service.wishlist.set(Object.keys(this.hash).length)
//   })
 
// }


}

