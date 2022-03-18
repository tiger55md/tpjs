import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { PetService } from '../pet.service';
import { Pet } from '../pet';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  pet: String | undefined
  pets: Pet[] | undefined 

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private petService : PetService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPets();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  getPets(): void{
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }

  save(): void {
    if (this.hero) {
      var e = (document.getElementById("petSelect")) as HTMLSelectElement;
      var sel = e.selectedIndex;
      var pet = e.options[sel].value;
        this.hero.pet = pet.slice(2)
        this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
    }
  }
}