import { Injectable, signal } from '@angular/core';

export interface Profile {
  name: string; 
  avatar: string;
  memberSince: number;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private _profile = signal<Profile | null>(null);
  profile = this._profile.asReadonly();

  loadProfile() {
    setTimeout(() => {
      this._profile.set({
        name: 'Ahmadreza Shamimi',
        avatar: 'https://avatars.githubusercontent.com/u/19757691?v=4',
        memberSince: 2016
      });
    }, 3000);
  }
}
