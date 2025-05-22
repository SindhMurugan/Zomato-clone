import { CanActivateChildFn } from '@angular/router';
import { ServiceService } from '../api/service.service';
import { inject } from '@angular/core';

export const guardsGuard: CanActivateChildFn = (childRoute, state) => {
     const service = inject(ServiceService)
     if(service.storage())return true
     else alert("please login the page")

     return false
};
