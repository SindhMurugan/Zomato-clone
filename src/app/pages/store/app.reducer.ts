import { createReducer, on } from "@ngrx/store"
import { emptyCardItem, removeCardItem, storeCardItemAction } from "./app.action"
import { SingleItem, store } from "../stucture"
import { inject } from "@angular/core"
import { ServiceService } from "../api/service.service"


// export interface Reducer {
//      item:SingleItem[]
// }


export const initialValue:store ={
    item:[],
    // quentity:0
}

export const storeCardItemReducer = createReducer(
    initialValue,
    on(storeCardItemAction , (state , item)=>{
        const reducer = {
            ...state , 
               item: [...state.item,item.item],
        }

        return reducer
        
    }
),

on(removeCardItem , (state , item)=>{
   
        const reducer = {
               item: state.item.filter((val) => val.itemID != item.item.itemID),
        }
        return reducer
        
    }
),



 on(emptyCardItem , ()=> initialValue)
)

