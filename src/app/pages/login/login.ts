import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule], // <-- Import Material modules
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login() {
    console.log('Login button clicked!');
  }
}
