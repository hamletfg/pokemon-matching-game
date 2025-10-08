import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

// Interface for our Pokémon card sets
interface PokemonSet {
  id: string;
  name: string;
}

@Component({
  selector: 'app-game-setup',
  standalone: true, // This component is standalone
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatSliderModule,
  ],
  templateUrl: './game-setup.html',
  styleUrls: ['./game-setup.scss'], // Using styleUrls for component-specific styles
})
export class GameSetup {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Form group to manage game settings
  gameSetupForm: FormGroup;

  // Mock data for Pokémon sets dropdown
  pokemonSets: PokemonSet[] = [
    { id: 'base', name: 'Base Set' },
    { id: 'jungle', name: 'Jungle' },
    { id: 'fossil', name: 'Fossil' },
    { id: 'team-rocket', name: 'Team Rocket' },
  ];

  constructor() {
    // Initialize the form with default values and validators
    this.gameSetupForm = this.fb.group({
      numPlayers: [1, [Validators.required, Validators.min(1), Validators.max(4)]],
      numMatches: [10, [Validators.required, Validators.min(5), Validators.max(20)]],
      pokemonSet: ['base', Validators.required],
    });
  }

  // Handle the "Start Game" button click
  startGame() {
    if (this.gameSetupForm.valid) {
      console.log('Game settings:', this.gameSetupForm.value);
      // Navigate to the game board, passing settings as query params or state
      this.router.navigate(['/game'], { queryParams: this.gameSetupForm.value });
    } else {
      console.error('Form is invalid');
    }
  }
}
