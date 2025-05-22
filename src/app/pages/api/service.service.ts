import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Type } from '@angular/core';
import { catchError, map, Observable, single, tap, throwError } from 'rxjs';
import { AddNewUser, AddToCard, LogIn, Result, SingleItem } from '../stucture';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient , private dialog:MatDialog) { }
 

  storage = signal<any>(null)
  allTheproducts = signal<SingleItem[]>([])
  selectedItem = signal<any>(null)
  editProfile = signal<boolean>(false)
  productQuantity = signal<any>(null)
  wishlist = signal<any>(null)


  openSignUpPage(bool:string , width="400px"):void{
      let dialogRef = this.dialog.open(LoginPageComponent, {
        width: width,
        data: { signUp:bool}
      });
    }


  getAllMenu():Observable<Result>{
    return this.http.get<Result>("/api/zomato/GetAllMenu" )
    
  }

  getAllPreviousOrders():Observable<Result>{
    return this.http.get<Result>("/api/zomato/GetAllOrders" )
    
  }

  addNewUser(args:AddNewUser):Observable<Result>{
    return this.http.post<Result>("/api/zomato/AddNewUser",args )
  }

 updatewUser(args:AddNewUser):Observable<Result>{
    return this.http.put<Result>("/api/zomato/UpdateUser",args ).pipe(catchError((error)=>{throw(error)}))
  }

  login(args:LogIn):Observable<Result>{
    console.log(args,'args')
    return this.http.post<Result>("/api/zomato/Login",args ).pipe(map((value)=> {
      console.log(value , 'mappp')
      return value
    }))
  }

  addToCart(args:AddToCard):Observable<Result>{
    return this.http.post<Result>("/api/zomato/AddToCart",args )
  }

  getCityName(lat:number , long:number):any{
    return this.http.get(`https://us1.locationiq.com/v1/reverse.php?key=YOUR_PRIVATE_TOKEN&lat=" ${lat}"&lon=" ${long} "&format=json"`)
  }

  deleteAccount():any{
    return this.http.delete<Result>(`/api/zomato/DeleteUserByUserId?userId=${this.storage().userId}` )
  }
}


