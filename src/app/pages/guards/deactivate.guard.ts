import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ServiceService } from '../api/service.service';

export const deactivateGuard: CanDeactivateFn<boolean> = (component, currentRoute, currentState, nextState) => {
  const service = inject(ServiceService)
  return service.editProfile()
};
