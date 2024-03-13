import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: WritableSignal<IUser | null> = signal(null);

  constructor() { }

  getUser(): Signal<IUser | null> {
    return this.user.asReadonly();
  }

  signIn(credentials: IUserCredentials) {
    if (credentials.email && credentials.password)
      this.user.set({
        firstName: "Jim",
        lastName: "Cooper",
        email: "jim@joesrobotshop.com",
      });
  }

  signOut() {
    this.user.set(null);
  }
}
