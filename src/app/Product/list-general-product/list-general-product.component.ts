import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-general-product',
  templateUrl: './list-general-product.component.html',
  styleUrls: ['./list-general-product.component.css']
})
export class ListGeneralProductComponent implements OnInit {

  products: Products[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.listGeneralProducts();
  }

  listGeneralProducts(){
    this.service.listProducts().subscribe(products => {
      this.products = products;
    });
  }

  createProductGeneral(){
    this.router.navigate(["createProductGeneral"]);
  }

  updateGeneralProduct(product: Products){
    this.router.navigate(["updateGeneralProduct"]);
    let idProduct = localStorage.setItem("idProduct", product.id.toString());
  }

  deleteGeneralProduct(product: Products){
    this.service.deleteProducts(product.id).subscribe(products => {
      this.products = this.products.filter(products => products !== product);
    });
  }

}
