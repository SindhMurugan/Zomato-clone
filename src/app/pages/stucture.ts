// import { Reducer } from "./store/app.reducer"


export interface Result{
    message: string,
    result: boolean,
    data: []
}

export interface store {
  item:SingleItem[],
  // quentity:number,
}


export interface SingleItem {
    restaurantID: number,
    price: number,
    menuItemName: string,
    itemID: number,
    description: string,
    restaurantName: string,
    availability: boolean,
    photoUrl: string,
    categoryName: string
}


export class AddNewUser{
  userId: number
  userName:string
  role:string
  password:string
  mobileNo:string
  emailId:string
  restaurantId: number

  constructor(){
    this.userId= 0
    this.userName=''
    this.role=''
    this.password=''
    this.mobileNo=''
    this.emailId=''
    this.restaurantId= 0
  }
}


export class AddToCard{
    customerId:number
    itemId:number
    quantity:number

    constructor(){
      this.customerId = 0
      this.itemId =0
      this.quantity =0
    }
 
}



export class LogIn{
    userName:string
    password:string
  
    constructor(){
      this.userName=''
      this.password=''
    }
  }

