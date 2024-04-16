import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
names = signal<string[]>([]);

addName(name: string){
  // oggetti gestiti per riferimento
  //
  this.names.update(oldArray => [...oldArray, name]);
}
}