import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  listaDeProductos: AngularFireList<any>;

  SelectProduct: Products = new Products();

  constructor(private QueCalor: AngularFireDatabase) {

   }

   getProductos(){
     return this.listaDeProductos = this.QueCalor.list('Productos');
   }

   Productos(producto: Products){
     this.listaDeProductos.push({
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio
     });
   }

   ActualizarProductos(producto: Products){
     this.listaDeProductos.update(producto.$id, {
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio
     });
   }

   EliminarProducto($id: string){
     this.listaDeProductos.remove($id);
   }

}
