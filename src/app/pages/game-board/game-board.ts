import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PokemonTcgService, PokemonCard } from '../../core/pokemon-tcg.service';

export interface GameCard extends PokemonCard {
  state: 'default' | 'flipped' | 'matched';
}

export interface Player {
  name: string;
  score: number;
}

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.scss'],
})
export class GameBoard implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pokemonService = inject(PokemonTcgService);

  numPlayers: number = 0;
  numMatches: number = 0;
  pokemonSet: string = '';
  isLoading: boolean = true;
  isGameOver: boolean = false;

  gameCards: GameCard[] = [];
  flippedCards: GameCard[] = [];
  checkingForMatch: boolean = false;

  players: Player[] = [];
  currentPlayerIndex: number = 0;
  matchesFound: number = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.numPlayers = +params['numPlayers'] || 1;
      this.numMatches = +params['numMatches'] || 10;
      this.pokemonSet = params['pokemonSet'] || 'base';

      this.initializePlayers();
      this.fetchCards();
    });
  }

  initializePlayers(): void {
    this.players = [];
    for (let i = 0; i < this.numPlayers; i++) {
      this.players.push({ name: `Player ${i + 1}`, score: 0 });
    }
  }

  fetchCards(): void {
    this.isLoading = true;
    this.isGameOver = false;
    this.matchesFound = 0;
    this.pokemonService.getCards(this.pokemonSet).subscribe({
      next: (cards) => {
        this.setupGame(cards);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch Pokémon cards', err);
        this.isLoading = false;
      },
    });
  }

  setupGame(cards: PokemonCard[]): void {
    const shuffledCards = this.shuffleArray([...cards]);
    const selectedCards = shuffledCards.slice(0, this.numMatches);
    const pairedCards = [...selectedCards, ...selectedCards].map((card) => ({
      ...card,
      state: 'default' as const,
    }));
    this.gameCards = this.shuffleArray(pairedCards);
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  flipCard(card: GameCard): void {
    if (card.state === 'matched' || card.state === 'flipped' || this.checkingForMatch) {
      return;
    }

    card.state = 'flipped';
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkingForMatch = true;
      this.checkForMatch();
    }
  }

  private checkForMatch(): void {
    setTimeout(() => {
      const [card1, card2] = this.flippedCards;
      if (card1.id === card2.id) {
        card1.state = 'matched';
        card2.state = 'matched';
        this.players[this.currentPlayerIndex].score++;
        this.matchesFound++;

        if (this.matchesFound === this.numMatches) {
          this.isGameOver = true;
        }
      } else {
        card1.state = 'default';
        card2.state = 'default';
        this.nextTurn();
      }

      this.flippedCards = [];
      this.checkingForMatch = false;
    }, 1000);
  }

  private nextTurn(): void {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numPlayers;
  }

  resetGame(): void {
    this.currentPlayerIndex = 0;
    this.initializePlayers();
    this.fetchCards();
  }

  goHome(): void {
    this.router.navigate(['/setup']);
  }
}
