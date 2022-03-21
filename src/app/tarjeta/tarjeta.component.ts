import { Component, Input, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {
  personajes: any = null;

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.personajesService
      .retornarPersonajes()
      .subscribe((result) => (this.personajes = result));
  }
}
