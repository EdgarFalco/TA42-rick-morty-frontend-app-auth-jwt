import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallestarjetaComponent } from './detallestarjeta.component';

describe('DetallestarjetaComponent', () => {
  let component: DetallestarjetaComponent;
  let fixture: ComponentFixture<DetallestarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallestarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallestarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
