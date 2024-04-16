import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
nome = input<string>(); // input è un segnale  signal
cognome = input.required<string>();
eta = input<number>();
}
