import { Injectable } from '@angular/core';
import {Hero, HEROES} from '../../shared';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(
    private readonly messagesService: MessagesService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add(`[${this.constructor.name.slice(1)}]: fetched heroes`);
    return heroes;
  }
}
