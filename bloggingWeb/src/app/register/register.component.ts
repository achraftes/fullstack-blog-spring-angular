import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Ajouter l'import
import { AuthService } from '../service/auth.service'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    
    FormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { username: '', password: '', email: '' };

  constructor(
    private authService: AuthService,
    private router: Router // Injecter le Router
  ) { }

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']); // Redirection
      },
      error: (error) => {
        console.error("Échec de l'inscription", error);
      }
    });
  }
}
