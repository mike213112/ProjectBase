import { RecuperarComponent } from './componentes/session/recuperar/recuperar.component';
import { RegisterComponent } from './componentes/session/register/register.component';
import { LoginComponent } from './componentes/session/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'accounts/login', component: LoginComponent },
  { path: 'accounts/register', component: RegisterComponent },
  { path: 'accounts/password/reset', component: RecuperarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
