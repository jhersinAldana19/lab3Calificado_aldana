import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';


const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path:'servicios', component: ServiciosComponent },
  { path: 'producto', component: ProductoComponent },
  { path:'marcas', component: MarcasComponent },
  { path: 'contactenos', component: ContactenosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
