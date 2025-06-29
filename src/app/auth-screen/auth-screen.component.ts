import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrls: ['./auth-screen.component.scss']
})
export class AuthScreenComponent {

  // constructor(private http: HttpClient, private router: Router) {}
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.http
        .post('http://localhost:3000/api/auth/login', { email, password })
        .subscribe({
          next: (response: any) => {
            if (response.token) {
              localStorage.setItem('token', response.token); // Save the token
              this.router.navigate(['/dashboard']); // Redirect to dashboard
            }
          },
          error: (err) => {
            console.error('Login failed:', err);
            alert('Invalid username or password');
          },
        });
    }
  }
}
