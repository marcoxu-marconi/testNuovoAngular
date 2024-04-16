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

addName(name: string){// add cambia indirizzo perche 
  // oggetti gestiti per riferimento
  //
  this.names.update(oldArray => [...oldArray, name]);
}

deleteName(index: number){ // qua oldarray non cambia indiizzo
 // 
  this.names.update(oldArray => {
    oldArray.splice(index, 1);
    return oldArray;
  });
}


}