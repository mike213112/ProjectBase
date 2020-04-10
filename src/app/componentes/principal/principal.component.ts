import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bases-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public isLogged: boolean;
  public email: string;
  constructor(private authService: LoginService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.authService.GetUser().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
  }

  Logout(){
    this.authService.Logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

}
