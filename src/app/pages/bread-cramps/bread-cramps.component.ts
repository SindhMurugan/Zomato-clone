import { TitleCasePipe } from '@angular/common';
import { AfterContentInit, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bread-cramps',
  imports: [TitleCasePipe],
  templateUrl: './bread-cramps.component.html',
  styleUrl: './bread-cramps.component.css'
})
export class BreadCrampsComponent implements AfterContentInit{

  breadCramps =[]

  
  
   constructor(private active:ActivatedRoute,private router:Router){}

    ngAfterContentInit(): void {
     this.active.queryParams.subscribe({
      next:(value)=>{
        console.log(value , 'value')
        this.breadCramps = value['active']
      }

     });
  }

  NavigateToPage(value:string):void{
    switch(value){
      case 'Home':
        this.router.navigate(['/'])
        break;
      case 'Products':
        this.router.navigate(['/zomato'],{queryParams:{active:['Home', 'Products']}})
        break;
      case 'Selected Item':
        this.router.navigate(['/zomato/selected'],{queryParams:{active:['Home', 'Products','Selected Item']}})
        break;
      case 'WishList':
        this.router.navigate(['/zomato/wishlist'],{queryParams:{active:['Home', 'Products','Selected Item','WishList']}})
        break;
    }

  }


}
