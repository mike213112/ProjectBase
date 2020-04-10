import { InventarioComponent } from './componentes/principal/inventario/inventario.component';
import { ProductoComponent } from './componentes/principal/producto/producto.component';
import { RegisterComponent } from './componentes/session/register/register.component';
import { LoginComponent } from './componentes/session/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Definir las rutas, estan se veran reflejado en la web como url
const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'principal/ingresar', component: ProductoComponent },
  { path: 'principal/inventario', component: InventarioComponent },
  { path: 'accounts/login', component: LoginComponent },
  { path: 'accounts/register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
