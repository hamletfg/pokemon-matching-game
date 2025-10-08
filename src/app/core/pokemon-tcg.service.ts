import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Interface for the card data we want
export interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
  };
}

// Interface for the overall API response, which nests the cards in a 'data' property
interface ApiResponse {
  data: PokemonCard[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonTcgService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  // The API uses specific set IDs (e.g., 'base1'), so we map our simple names to them.
  private setMap: { [key: string]: string } = {
    base: 'base1',
    jungle: 'base2',
    fossil: 'base3',
    'team-rocket': 'base4',
  };

  getCards(set: string): Observable<PokemonCard[]> {
    const setId = this.setMap[set] || 'base1'; // Default to base set if the chosen set is invalid
    const url = `${this.apiUrl}?q=set.id:${setId}&pageSize=50`; // Fetch up to 50 cards from the set

    // We perform an HTTP GET request and then use RxJS's map operator
    // to transform the response, so we only get the array of cards.
    return this.http.get<ApiResponse>(url).pipe(map((response) => response.data));
  }
}
