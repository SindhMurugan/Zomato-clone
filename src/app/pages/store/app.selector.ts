import { createSelector } from "@ngrx/store";
import { store } from "../stucture";

export const selectorGet =(state:store)=> {
    // console.log(state , state.item)
    return state
}

export const getData = createSelector(
    selectorGet,
    (state) => {
        console.log(state , '6666666')
        return {item:state.item}
    }

)

