import { HttpEventType, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, retry, tap } from 'rxjs';




export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  // const request = req.clone()
  return next(req).pipe(
    tap((event)=> {
      if(event.type == HttpEventType.Response){
        console.log(event.url , "api successfully completed" , event.status)
      }
    }),
    catchError((error)=>{
    throw(error)
  }),
  retry(1),
  finalize(()=>console.log("api done")))
};
