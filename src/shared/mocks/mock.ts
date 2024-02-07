import { Hero } from '../interfaces';

export const HEROES: Hero[] = [
  { id: 1, name: 'Invisible Man' },
  { id: 2, name: 'Sherlock Holmes' },
  { id: 3, name: 'Ghost rider' },
  { id: 4, name: 'Superman' },
  { id: 5, name: 'Spider-man' },
  { id: 6, name: 'Star lord' },
] as const;
