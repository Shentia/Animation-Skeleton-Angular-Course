import { Component, effect, inject } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  private profileService = inject(ProfileService);
  protected profile = this.profileService.profile;

  constructor() {
    effect(() => {
      if (!this.profile()) {
        this.profileService.loadProfile();
      }
    });
  }
}