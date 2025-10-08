import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

// Import our new service and the card interface
import { PokemonTcgService, PokemonCard } from '../../core/pokemon-tcg.service';

// We'll extend the PokemonCard interface to include the game state for each card
export interface GameCard extends PokemonCard {
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule, // Add MatButtonModule here
  ],
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.scss'],
})
export class GameBoard implements OnInit {
  private route = inject(ActivatedRoute);
  // Inject the Pokémon TCG Service
  private pokemonService = inject(PokemonTcgService);

  // Properties to hold our game settings
  numPlayers: number = 0;
  numMatches: number = 0;
  pokemonSet: string = '';
  isLoading: boolean = true;

  // This array will hold the cards for the current game
  gameCards: GameCard[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.numPlayers = +params['numPlayers'] || 1;
      this.numMatches = +params['numMatches'] || 10;
      this.pokemonSet = params['pokemonSet'] || 'base';

      this.fetchCards(); // Fetch cards once we have the settings
    });
  }

  fetchCards(): void {
    this.isLoading = true;
    this.pokemonService.getCards(this.pokemonSet).subscribe({
      next: (cards) => {
        this.setupGame(cards);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch Pokémon cards', err);
        this.isLoading = false;
        // Here you could add logic to show an error message to the user
      },
    });
  }

  setupGame(cards: PokemonCard[]): void {
    // 1. Shuffle the fetched cards
    const shuffledCards = this.shuffleArray([...cards]);

    // 2. Select the number of cards needed for the matches
    const selectedCards = shuffledCards.slice(0, this.numMatches);

    // 3. Duplicate the selected cards to create pairs and add game state
    const pairedCards = [...selectedCards, ...selectedCards].map((card) => ({
      ...card,
      state: 'default' as const, // Start with the back facing up
    }));

    // 4. Shuffle the final deck and assign it to our gameCards property
    this.gameCards = this.shuffleArray(pairedCards);
  }

  // A simple and effective array shuffling algorithm (Fisher-Yates shuffle)
  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // We will add logic to this function in the next step
  flipCard(card: GameCard): void {
    console.log('Flipping card:', card.id);
    // Logic for flipping cards and checking for matches will go here
  }
}
