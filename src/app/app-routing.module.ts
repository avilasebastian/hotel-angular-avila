import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { ServiciosAdicionalesComponent } from './componentes/servicios-adicionales/servicios-adicionales.component';
import { FechasComponent } from './componentes/fechas/fechas.component';
import { ItemComponent } from './componentes/item/item.component';


const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'detalle/:id', component:DetalleComponent},

  { path:'**', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentes=[
  NavbarComponent,
  HabitacionesComponent,
  ServiciosAdicionalesComponent,
  FechasComponent,
  ItemComponent,
  

  HomeComponent,
  DetalleComponent,

]
