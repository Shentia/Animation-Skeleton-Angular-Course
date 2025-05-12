import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  template: `
    <app-profile-card></app-profile-card>
    <app-profile-card></app-profile-card>
    <app-profile-card></app-profile-card>
  `,
  imports: [
    ProfileCardComponent
  ],
  styles: [`
    :host {
      display: block;
    }

    app-profile-card:not(:last-child) {
      display: block;
      margin-bottom: 18px;
    }
  `]
})
export class App {
}

bootstrapApplication(App);
