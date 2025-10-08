import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/auth'; // <-- Import the service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  // Inject both the AuthService and Angular's Router
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  login() {
    this.authService
      .loginWithGoogle()
      .then(() => {
        // On successful login, navigate to the game setup page
        this.router.navigate(['/setup']);
      })
      .catch((e) => {
        console.error(e); // Log any errors
      });
  }
}
