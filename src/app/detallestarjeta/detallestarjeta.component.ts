import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-detallestarjeta',
  templateUrl: './detallestarjeta.component.html',
  styleUrls: ['./detallestarjeta.component.css'],
})
export class DetallestarjetaComponent implements OnInit {
  personajes: any = null;
  id: any = null;

  constructor(
    private ruta: ActivatedRoute,
    private personajesService: PersonajesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');

    this.personajesService
      .getById(this.id)
      .subscribe((result) => (this.personajes = result));
  }

  deleteCharacter(): void {
    this.personajesService.delete(this.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tarjeta']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateStatus(status: string) {
    const data = {
      id: this.personajes.id,
      name: this.personajes.name,
      status: status,
      species: this.personajes.species,
      gender: this.personajes.gender,
      origin: this.personajes.origin,
      location: this.personajes.location,
      image: this.personajes.image,
    };

    this.personajesService.update(this.personajes.id, data).subscribe(
      (response) => {
        this.personajes.status = status;
        console.log(response);
        this.router.navigate(['/targeta/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
