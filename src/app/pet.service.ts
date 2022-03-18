import { Injectable } from '@angular/core';
import { Pet } from "./pet"
import { PETS } from "./mock-pets"
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private messageService : MessageService) { }


  getPets(): Observable<Pet[]>{
    const pets = of(PETS);
    this.messageService.add('PetService: fetched pets');
    return pets;
  }
}
