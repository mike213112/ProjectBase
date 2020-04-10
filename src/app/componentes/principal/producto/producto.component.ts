import { LoginService } from './../../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from './../../../services/base.service';
import { Products } from './../../../models/products';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bases-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  listarProductos: Products[];
  isLogged: boolean;
  email: string; 
  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

  ngOnInit(){
    this.baseService.getProductos()
    .snapshotChanges()
    .subscribe(item => {
      this.listarProductos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarProductos.push(x as Products)
      });
    });
    this.resetForm();
    this.authService.GetUser().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
  }

  onSubmit(myform: NgForm){
    this.baseService.Productos(myform.value);
    this.toastr.success('Se agrego un nuevo producto')
    this.resetForm(myform);
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.baseService.SelectProduct = new Products();
  }

  Logout() {
    this.authService.Logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

}
