import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    console.log('Login attempt:', this.user);
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log('Login successful', response);
  
        // Vérifier si un token est reçu et le stocker
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/view-all']);
        } else {
          console.error('No token received!');
        }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
  
}
