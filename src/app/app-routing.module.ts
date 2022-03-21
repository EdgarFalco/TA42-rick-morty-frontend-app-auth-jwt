import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { AddComponent } from './add/add.component';
import { DetallestarjetaComponent } from './detallestarjeta/detallestarjeta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminGuardService } from './services/auth/admin-guard.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  {
    path: 'acercade',
    component: AcercadeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tarjeta/:id',
    component: DetallestarjetaComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
