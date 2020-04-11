import { Products } from './../../models/products';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { BaseService } from './../../services/base.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'bases-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public baseService: BaseService,
              private toastr: ToastrService) { }
    @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void {
  }

  onSubmit(myform: NgForm): void {
    if(confirm('Estas seguro de que quieres modificar este producto?')){
      this.baseService.ActualizarProductos(myform.value);
      this.toastr.success('Producto Actualizado');
      this.resetForm(myform);
      this.btnClose.nativeElement.click();
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.baseService.SelectProduct = new Products();
  }

}
