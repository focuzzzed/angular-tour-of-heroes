import { Injectable } from '@angular/core';
import {Hero, HEROES} from '../../shared';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
