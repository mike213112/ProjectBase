import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bases-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private autenticar: LoginService,
              private mensaje: ToastrService) { }

  ngOnInit(): void {
  }

  InicioSesion(){
    this.autenticar.Login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/principal']);
      this.mensaje.success('Lo Lograstes Campeon')
    }).catch((err) => {
      this.mensaje.error('Hacelo bien');
      this.router.navigate(['accounts/login']);
    });
  }

  Regresar(){
    this.mensaje.success('Regreso a la pagina principal');
    this.router.navigate(['/principal']);
  }

}
