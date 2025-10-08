This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
src/
  app/
    core/
      auth.spec.ts
      auth.ts
    pages/
      game-board/
        game-board.html
        game-board.spec.ts
        game-board.ts
      game-setup/
        game-setup.html
        game-setup.spec.ts
        game-setup.ts
      login/
        login.html
        login.scss
        login.spec.ts
        login.ts
      user-stats/
        user-stats.html
        user-stats.spec.ts
        user-stats.ts
    app.config.ts
    app.html
    app.routes.ts
    app.spec.ts
    app.ts
  environments/
    environment.ts
  index.html
  main.ts
  styles.scss
.editorconfig
.gitignore
angular.json
firebase.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

# Files

## File: src/app/core/auth.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';

import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
````

## File: src/app/pages/game-board/game-board.html
````html
<p>game-board works!</p>
````

## File: src/app/pages/game-board/game-board.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoard } from './game-board';

describe('GameBoard', () => {
  let component: GameBoard;
  let fixture: ComponentFixture<GameBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/game-board/game-board.ts
````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  imports: [],
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss'
})
export class GameBoard {

}
````

## File: src/app/pages/game-setup/game-setup.html
````html
<p>game-setup works!</p>
````

## File: src/app/pages/game-setup/game-setup.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetup } from './game-setup';

describe('GameSetup', () => {
  let component: GameSetup;
  let fixture: ComponentFixture<GameSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/game-setup/game-setup.ts
````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-setup',
  imports: [],
  templateUrl: './game-setup.html',
  styleUrl: './game-setup.scss'
})
export class GameSetup {

}
````

## File: src/app/pages/login/login.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/user-stats/user-stats.html
````html
<p>user-stats works!</p>
````

## File: src/app/pages/user-stats/user-stats.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStats } from './user-stats';

describe('UserStats', () => {
  let component: UserStats;
  let fixture: ComponentFixture<UserStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/user-stats/user-stats.ts
````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  imports: [],
  templateUrl: './user-stats.html',
  styleUrl: './user-stats.scss'
})
export class UserStats {

}
````

## File: src/app/app.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pokemon-matching-game');
  });
});
````

## File: src/environments/environment.ts
````typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCYe2RQmOyV5g1NhkA2SybVFEzWRYqQFVM',
    authDomain: 'pokemon-matching-game-81828.firebaseapp.com',
    projectId: 'pokemon-matching-game-81828',
    storageBucket: 'pokemon-matching-game-81828.firebasestorage.app',
    messagingSenderId: '884427391331',
    appId: '1:884427391331:web:9410997470f5942a181356',
  },
};
````

## File: .editorconfig
````
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
````

## File: .gitignore
````
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings

# System files
.DS_Store
Thumbs.db
````

## File: angular.json
````json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "pokemon-matching-game": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "pokemon-matching-game:build:production"
            },
            "development": {
              "buildTarget": "pokemon-matching-game:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular/build:extract-i18n"
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}
````

## File: firebase.json
````json
{}
````

## File: README.md
````markdown
# PokemonMatchingGame

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
````

## File: tsconfig.app.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
````

## File: tsconfig.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "typeCheckHostBindings": true,
    "strictTemplates": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: tsconfig.spec.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.ts"
  ]
}
````

## File: src/app/core/auth.ts
````typescript
import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);

  loginWithGoogle() {
    // This creates a new popup window for Google sign-in
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
````

## File: src/app/pages/login/login.html
````html
<div class="login-container">
  <mat-card>
    <mat-card-header>
      <mat-card-title>Welcome!</mat-card-title>
      <mat-card-subtitle>Sign in to play</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p>Please sign in with your Google account to continue.</p>
    </mat-card-content>
    <mat-card-actions align="end">
      <button mat-raised-button color="primary" (click)="login()">🔑 Sign in with Google</button>
    </mat-card-actions>
  </mat-card>
</div>
````

## File: src/app/pages/login/login.scss
````scss
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  mat-card {
    max-width: 400px;
  }
}
````

## File: src/app/app.html
````html
<h1>Hello, {{ title }}</h1>
<router-outlet />
````

## File: src/app/app.ts
````typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // <-- Add this import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule, // <-- Add this to the imports array
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'pokemon-matching-game';
}
````

## File: src/index.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PokemonMatchingGame</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
````

## File: src/main.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
````

## File: src/styles.scss
````scss
// Include theming for Angular Material with `mat.theme()`.
// This Sass mixin will define CSS variables that are used for styling Angular Material
// components according to the Material 3 design spec.
// Learn more about theming and how to use it for your application's
// custom components at https://material.angular.dev/guide/theming
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,
      tertiary: mat.$blue-palette,
    ),
    typography: Roboto,
    density: 0,
  ));
}

body {
  // Default the application to a light color theme. This can be changed to
  // `dark` to enable the dark color theme, or to `light dark` to defer to the
  // user's system settings.
  color-scheme: light;

  // Set a default background, font and text colors for the application using
  // Angular Material's system-level CSS variables. Learn more about these
  // variables at https://material.angular.dev/guide/system-variables
  background-color: var(--mat-sys-surface);
  color: var(--mat-sys-on-surface);
  font: var(--mat-sys-body-medium);

  // Reset the user agent margin.
  margin: 0;
}
/* You can add global styles to this file, and also import other style files */

html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
````

## File: src/app/pages/login/login.ts
````typescript
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
````

## File: src/app/app.config.ts
````typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// 1. Import your environment and the Firebase provider functions
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),

    // 2. Add the providers for Firebase to the providers array
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
````

## File: package.json
````json
{
  "name": "pokemon-matching-game",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "prettier": {
    "printWidth": 100,
    "singleQuote": true,
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^20.3.3",
    "@angular/cdk": "^20.2.7",
    "@angular/common": "^20.1.0",
    "@angular/compiler": "^20.1.0",
    "@angular/core": "^20.1.0",
    "@angular/fire": "^20.0.1",
    "@angular/forms": "^20.1.0",
    "@angular/material": "^20.2.7",
    "@angular/platform-browser": "^20.1.0",
    "@angular/router": "^20.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular/build": "^20.1.6",
    "@angular/cli": "^20.1.6",
    "@angular/compiler-cli": "^20.1.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.8.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.8.2"
  }
}
````

## File: src/app/app.routes.ts
````typescript
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
````
