import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LlmResponse {
  explanation: string;
}

@Injectable({
  providedIn: 'root',
})
export class LlmService {
  private apiUrl = 'http://localhost:3000/api/llm'; // adjust your backend URL

  constructor(private http: HttpClient) {}

  queryLLM(question: string): Observable<LlmResponse> {
    return this.http.post<LlmResponse>(this.apiUrl, { question });
  }
}
