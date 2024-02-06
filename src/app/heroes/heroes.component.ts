import { Component } from '@angular/core';
import { Hero } from '../../shared';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class HeroesComponent {
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
