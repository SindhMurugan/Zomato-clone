import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Result, SingleItem } from '../stucture';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { BreadCrampsComponent } from '../bread-cramps/bread-cramps.component';

@Component({
  selector: 'app-all-items',
  imports: [CurrencyPipe,NgClass,BreadCrampsComponent ],
  templateUrl: './all-items.component.html',
  styleUrl: './all-items.component.css'
})
export class AllItemsComponent {
  
  isHovered = -1;
  service = inject(ServiceService)
  // getAllItemsFormApi:SingleItem[]=this.service.allTheproducts()
  router = inject(Router)

 

 

  constructor(){
    this.getAllItems()
  }

  getAllItems(){
    // alert("999")
    this.service.getAllMenu().subscribe({
      next:(data:Result)=>{
        this.service.allTheproducts.set(data.data)

      },
      error:()=>{}
    })
    
  }

  goToDetailSection(item:SingleItem){
    // this.router.navigateByUrl('/selectedItem')
    this.router.navigate(['/zomato/selected'] , {queryParams:{name:item.menuItemName, id:item.itemID, active:['Home', 'Products','Selected Item']}})
    this.service.selectedItem.set(item)

  }

}
