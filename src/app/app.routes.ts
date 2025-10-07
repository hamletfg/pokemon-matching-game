import { Routes } from '@angular/router';

// Import the new components
import { LoginComponent } from './pages/login/login.component';
import { GameSetupComponent } from './pages/game-setup/game-setup.component';
import { GameBoardComponent } from './pages/game-board/game-board.component';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';

export const routes: Routes = [
  // When the app loads, redirect the empty path to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Define the path for each page
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: GameSetupComponent },
  { path: 'game', component: GameBoardComponent },
  { path: 'stats', component: UserStatsComponent },
];
