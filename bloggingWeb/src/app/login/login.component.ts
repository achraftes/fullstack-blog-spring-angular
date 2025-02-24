import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
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
    console.log('Tentative de connexion:', this.user);
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log('Connexion réussie', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/view-all']);
        } else {
          console.error('Pas de token reçu!');
        }
      },
      error => {
        console.error('Échec de la connexion', error);
      }
    );
  }
}