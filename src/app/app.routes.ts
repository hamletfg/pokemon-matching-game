import { Routes } from '@angular/router';

// Update the class names in the {} to match what's in your files
import { Login } from './pages/login/login';
import { GameSetup } from './pages/game-setup/game-setup';
import { GameBoard } from './pages/game-board/game-board';
import { UserStats } from './pages/user-stats/user-stats';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Also update the component names here
  { path: 'login', component: Login },
  { path: 'setup', component: GameSetup },
  { path: 'game', component: GameBoard },
  { path: 'stats', component: UserStats },
];
