import { Component } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss',
  imports: [HeroesComponent],
  standalone: true
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
