import { AfterViewInit, Component, inject } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Result, SingleItem } from '../stucture';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  coords:any

 

  //  getAllItemsFormApi:SingleItem[]=this.service.allTheproducts()

   constructor(private service:ServiceService , private http:HttpClient){

   }


 

  searchItem(event:KeyboardEvent){
    // console.log("999999" , event)
  }

  findLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      
      
    }
  }

  showPosition(position:any) {
    let { coords } = position;
    
    // getCity(coords); 

  }

  // getCity(coords:any){
  //   console.log("9999" , coords)
  //   const latitude = coords ['latitude']
  //   const longitude=coords ['longitude']
  //   console.log("8888" , latitude)
  //   this.http.get(`https://us1.locationiq.com/v1/reverse.php?key=YOUR_PRIVATE_TOKEN&lat=" ${latitude}"&lon=" ${longitude} "&format=json"`)
  //   .subscribe({
  //     next:(data:any)=>{
  //       console.log(data , "data")
  //     }
  //   })

  }

 

  
   


