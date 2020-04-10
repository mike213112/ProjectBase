import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SeleccionarUsuario: AngularFireList<any>;

  constructor(public BeckyyEmmanuelNoHablan: AngularFireAuth) { 

  }

  //Iniciar Sesion
  Login(email: string, password: string){
    return new Promise((retor, reject) => {
      this.BeckyyEmmanuelNoHablan.auth.signInWithEmailAndPassword(email, password)
      .then( userData => retor(userData),
      error => reject(error));
    });
  }


  ResetContra($id: string, newpassword: string){
    return new Promise((retorn, reject) => {
      this.BeckyyEmmanuelNoHablan.auth.confirmPasswordReset($id, newpassword)
      .then( userData => retorn(userData),
      error => reject(error));
    });
  }
  
  ResetContraWithEmail(email: string){
    return new Promise((retorn, reject) => {
      this.BeckyyEmmanuelNoHablan.auth.sendPasswordResetEmail(email)
      .then( userData => retorn(userData),
      error => reject(error));
    });
  }

  ElimarUser($id: string){
    this.SeleccionarUsuario.remove($id);
  }

  //Registar un nuevo usuario
  Register(email: string, password: string){
    return new Promise((retornar, reject) => {
      this.BeckyyEmmanuelNoHablan.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => retornar(userData),
      err => reject(err));
    });
  }
  
  //Cerrar Sesion
  Logout(){
    return this.BeckyyEmmanuelNoHablan.auth.signOut();
  }

  //Obtener el usuario
  GetUser(){
    return this.BeckyyEmmanuelNoHablan.authState.pipe(map(auth => auth));
  }

}
