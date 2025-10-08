import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.scss'],
})
export class GameBoard implements OnInit {
  private route = inject(ActivatedRoute);

  // Properties to hold our game settings
  numPlayers: number = 0;
  numMatches: number = 0;
  pokemonSet: string = '';
  isLoading: boolean = true;

  ngOnInit(): void {
    // Subscribe to query parameter changes
    this.route.queryParams.subscribe((params) => {
      // Safely parse parameters to the correct type
      this.numPlayers = params['numPlayers'] ? +params['numPlayers'] : 1;
      this.numMatches = params['numMatches'] ? +params['numMatches'] : 10;
      this.pokemonSet = params['pokemonSet'] || 'base';
      this.isLoading = false; // Data loaded, turn off spinner

      // We'll log the settings to the console to verify
      console.log('Game settings received:', {
        players: this.numPlayers,
        matches: this.numMatches,
        set: this.pokemonSet,
      });
    });
  }
}
