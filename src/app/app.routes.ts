import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllItemsComponent } from './pages/all-items/all-items.component';
import { SelectedItemComponent } from './pages/selected-item/selected-item.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ParentComponent } from './pages/parent/parent.component';
import { guardsGuard } from './pages/guards/guards.guard';
import { deactivateGuard } from './pages/guards/deactivate.guard';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    // {path:'**' , component:HomeComponent},
    // canActivateChild:[guardsGuard],
    {path:'zomato' ,component:ParentComponent, canActivateChild:[guardsGuard],
         children:[
    {path:'' 
        ,loadComponent:()=> import("./pages/all-items/all-items.component").then((m)=> m.AllItemsComponent),
        
    },
    {path:'selected' , component:SelectedItemComponent},
    {path:'user/:id' , component:ProfileComponent },
    {path:'wishlist' , component:WishlistComponent}
    ]
},
   
];
