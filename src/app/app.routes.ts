import { Routes } from '@angular/router';

// Corrected import paths to match your file names
import { LoginComponent } from './pages/login/login';
import { GameSetupComponent } from './pages/game-setup/game-setup';
import { GameBoardComponent } from './pages/game-board/game-board';
import { UserStatsComponent } from './pages/user-stats/user-stats';

export const routes: Routes = [
  // When the app loads, redirect the empty path to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Define the path for each page
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: GameSetupComponent },
  { path: 'game', component: GameBoardComponent },
  { path: 'stats', component: UserStatsComponent },
];
