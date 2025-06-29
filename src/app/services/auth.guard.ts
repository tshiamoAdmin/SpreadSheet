import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard = () => {
  const router = inject(Router); // Inject the Router service
  const jwtHelper = inject(JwtHelperService); // Inject the JwtHelperService from @auth0/angular-jwt

  const token = localStorage.getItem('token'); // Retrieve the token

  if (token && !jwtHelper.isTokenExpired(token)) {
    return true; // Allow access if the token is valid and not expired
  } else {
    router.navigate(['/login']); // Redirect to the login page
    return false; // Block access
  }

  
};


