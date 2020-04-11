import { BaseService } from './services/base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, FormGroup, FormControlName } from '@angular/forms'
import { environment } from '../environments/environment';

import { LoginComponent } from './componentes/session/login/login.component';
import { RegisterComponent } from './componentes/session/register/register.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ProductoComponent } from './componentes/principal/producto/producto.component';
import { InventarioComponent } from './componentes/principal/inventario/inventario.component';
import { ModalComponent } from './componentes/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    ProductoComponent,
    InventarioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    BaseService,
    LoginComponent,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
