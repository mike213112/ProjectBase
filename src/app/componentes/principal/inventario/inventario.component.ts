import { Products } from './../../../models/products';
import { LoginService } from './../../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from './../../../services/base.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bases-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  isLogged: boolean;
  listarProductos: Products[];
  email: string;

  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

  ngOnInit() {
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
    this.authService.GetUser().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    });
  }

  Editar(producto: Products){
    this.baseService.SelectProduct = Object.assign({}, producto);
  }

  Delect($id: string){
    if(confirm('Estas seguro de querer eliminar este producto del inventario?')){
      this.baseService.EliminarProducto($id);
      this.toastr.success('El producto ha sido eliminado correctamente');
    }
  }

  Logout() {
    this.authService.Logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

}
