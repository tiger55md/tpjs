import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', pet:'' },
      { id: 12, name: 'Narco', pet: '' },
      { id: 13, name: 'Bombasto', pet: '' },
      { id: 14, name: 'Celeritas', pet: '' },
      { id: 15, name: 'Magneta', pet: '' },
      { id: 16, name: 'RubberMan', pet: '' },
      { id: 17, name: 'Dynama', pet: ''},
      { id: 18, name: 'Dr IQ', pet: '' },
      { id: 19, name: 'Magma', pet: '' },
      { id: 20, name: 'Tornado', pet: '' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}