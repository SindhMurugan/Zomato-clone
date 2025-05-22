import { AfterContentInit, Component, inject } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Result } from '../stucture';

@Component({
  selector: 'app-previous-order',
  imports: [],
  templateUrl: './previous-order.component.html',
  styleUrl: './previous-order.component.css'
})
export class PreviousOrderComponent implements AfterContentInit{

  service = inject(ServiceService)
  getAllOrdersList = new Array()


  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllOrders():void{
this.service.getAllPreviousOrders().subscribe({
  next:(data:Result)=>{
    this.getAllOrdersList = data.data
  }
})
  }

}
