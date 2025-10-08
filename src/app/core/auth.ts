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
