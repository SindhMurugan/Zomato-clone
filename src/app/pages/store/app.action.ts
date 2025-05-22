import { createAction, props } from "@ngrx/store";
import { SingleItem, store } from "../stucture";

export const storeCardItemAction = createAction("add item [product]" , props<{item:SingleItem}>())
export const removeCardItem = createAction("remove item [product]" , props<{item:SingleItem}>())
export const emptyCardItem = createAction("empty card [product]" , props<{item:[]}>())