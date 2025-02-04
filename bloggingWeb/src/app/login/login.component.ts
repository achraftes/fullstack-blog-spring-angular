import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
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
      response => {
        console.log('Login successful', response);
        
        // Stocker l'état de connexion (optionnel, peut être stocké dans un service ou localStorage)
        localStorage.setItem('isLoggedIn', 'true');

        // Rediriger vers une des pages accessibles après login
        this.router.navigate(['/view-all']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
