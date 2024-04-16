import { Component, computed, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
count = signal<number>(0);
calculate = signal<boolean>(false);
// se non uso parentesi graffe dopo lambda, allora posso anche non mettere parola chiave return
doubleCount = computed<number>(() => this.count() * 2);

conditionalCalculated = computed<number>(() => {

  if (this.calculate()) {
    return this.count() * 2;
  }
  else {
    return -1;
  }
});



incrementCount(){
  this.count.update(oldValue => oldValue + 1);
  // oldValue => oldValue + 1 funzione di callback
}
resetCount(){
  this.count.set(0);
}
//count è un elemento in grado di lanciare segnali. 
//zonejs ogni volta riaggiorna tutta la pagina. anche se cambia solo un valore
//con signal non aggiorna tutta la pagina ma solo il valore che cambia, cambia solo element che chiama il set e update. 
//INCREMENTA IL PERFORMANCE


}
