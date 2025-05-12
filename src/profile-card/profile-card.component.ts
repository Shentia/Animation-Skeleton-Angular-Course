import { Component, effect, inject } from '@angular/core';
import { ProfileService } from '../profile.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  animations:[
    trigger('fadeOut',[
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))
      ]),
      trigger('fadeIn', [
        transition(':enter',[
          style({opacity:0}),
          animate('600ms ease-in',style({opacity:1}))
        ])
      ])
    ])
  ]
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