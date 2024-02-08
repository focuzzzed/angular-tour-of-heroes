import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesService } from './heroes.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  standalone: true
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
    private readonly heroService: HeroesService,
    private readonly messagesService: MessagesService,
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(`[${this.constructor.name.slice(1)}]: Selected hero id=${hero.id}`);
  }
}
