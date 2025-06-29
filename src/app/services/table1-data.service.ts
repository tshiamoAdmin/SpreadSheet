import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { table1_Data } from '../models/table1.model';

@Injectable({
  providedIn: 'root'
})
export class Table1DataService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Fetch all deposit data
  getDepositData(): Observable<table1_Data[]> {
    return this.http.get<table1_Data[]>(`${this.apiUrl}/deposits`);
  }

  // Fetch deposit data for a specific bank
  getDepositDataByBank(bankId: number): Observable<table1_Data[]> {
    return this.http.get<table1_Data[]>(`${this.apiUrl}/deposits?bank_id=${bankId}`);
  }
}
