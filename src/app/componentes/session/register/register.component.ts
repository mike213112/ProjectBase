import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../../services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bases-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private autenticar: LoginService,
              private mensaje: ToastrService) { }

  ngOnInit(): void {
  }

  Register(){
    this.autenticar.Register(this.email, this.password)
    .then((res) =>  {
      this.mensaje.success('Usuario Registrado');
      this.router.navigate(['/principal']);
    });
  }

  Regresar(){
    this.mensaje.success('Regreso a la pagina principal');
    this.router.navigate(['/principal']);
  }

}
