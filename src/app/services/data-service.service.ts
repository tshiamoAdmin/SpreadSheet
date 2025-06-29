import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Bank } from '../dashboard/dashboard-components/bank-list/bank.model'; 

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiUrl = 'http://localhost:3000/api';

  private banks: Bank[] = [];

  getBanksArray(): Bank[] {
    return [...this.banks]; // Return a copy of the array
  }
  constructor(private http: HttpClient) {}

  
  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(`${this.apiUrl}/banks`).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   console.error('An error occurred:', error.message);
  //   return throwError(() => new Error('Something went wrong. Please try again later.'));
  // }
    // Handle errors
    private handleError(error: HttpErrorResponse): Observable<never> {
      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        console.error('An error occurred:', error.error.message);
      } else {
        // Backend error
        console.error(`Backend returned code ${error.status}, body was:`, error.error);
      }
      // Return an observable with a user-facing error message
      return throwError(() => new Error('Something went wrong; please try again later.'));
    }
  
}
