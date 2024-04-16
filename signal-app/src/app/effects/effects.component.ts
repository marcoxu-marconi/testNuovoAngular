import { Component, effect, signal } from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent extends SignalComponent{ // solo la parte typescript viene ereditata

constructor(){      // ricihama costruttore del padre
  super();        
  // effect va chiamato quando il signal camia
  effect(() => {
    console.log('count is changed', this.count());
  })
}

}
