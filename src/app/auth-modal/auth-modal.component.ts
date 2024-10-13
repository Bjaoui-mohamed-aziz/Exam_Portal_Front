import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html', 
  styleUrls: ['./auth-modal.component.css'],
  animations: [
    trigger('modalAnimation', [
      state('login', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('signup', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('login => signup', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('signup => login', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AuthModalComponent {
  currentModal = 'login'; 

  // Method to switch modals
  toggleModal() {
    this.currentModal = this.currentModal === 'login' ? 'signup' : 'login';
  }
}
