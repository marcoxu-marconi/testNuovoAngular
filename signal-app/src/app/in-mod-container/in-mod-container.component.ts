import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-in-mod-container',
  standalone: true,
  imports: [],
  templateUrl: './in-mod-container.component.html',
  styleUrl: './in-mod-container.component.css'
})
export class InModContainerComponent {
nome = signal<string>('Xu');
eta = signal<number>(5);
cognome = signal<string>('Xu');
}
