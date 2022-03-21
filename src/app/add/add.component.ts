import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../models/character.model';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  character: Character = {
    id: 0,
    name: '',
    gender: '',
    species: '',
    location: '',
    image: '',
  };

  submitted = false;

  constructor(
    private personajesService: PersonajesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarCharacter(): void {
    const data = {
      id: this.character.id,
      name: this.character.name,
      status: 'Alive',
      species: 'creado nuevo',
      gender: 'creado nuevo',
      origin: 'creado nuevo',
      location: 'creado nuevo',
      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    };

    this.personajesService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/tarjeta']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: '',
    };
  }
}
