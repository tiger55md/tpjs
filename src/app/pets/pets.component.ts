import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pet } from "../pet"
import { PetService } from "../pet.service"
import { MessageService } from '../message.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  selectedPet?: Pet;
  pets: Pet[] = [];

  constructor( private petService : PetService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.petService.getPets().subscribe( pets => this.pets = pets)
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
    this.messageService.add(`PetsComponent: Selected pet name=${pet.name}`);
  }



}
