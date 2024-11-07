import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <--- Importa ReactiveFormsModule aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductoComponent,
    MarcasComponent,
    ContactenosComponent,
    NavmenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // <--- Asegúrate de que ReactiveFormsModule esté aquí
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
