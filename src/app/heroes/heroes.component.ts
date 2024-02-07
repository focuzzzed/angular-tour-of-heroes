import { Component } from '@angular/core';
import { Hero, HEROES } from '../../shared';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  standalone: true
})
export class HeroesComponent {
  public heroes: Hero[] = HEROES;
  public selectedHero?: Hero;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
