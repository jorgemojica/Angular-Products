import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Products[];
  nameStore: String;
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit() {
    this.nameStore = localStorage.getItem("nameStore")!;
    this.listProductsByStore(+localStorage.getItem("idStore")!);
  }

  listProductsByStore(id:number){
    this.service.listProductsByStore(id).subscribe(products => {
      this.products = products;
    })
  }

  createProduct(){
    this.router.navigate(["createProduct"]);
  }

  delete(idProduct: number){
    let idStore = localStorage.getItem("idStore");
    this.service.deleteStoreProduct(+idStore!, +idProduct!).subscribe(data => {
      alert("Product deleted");
      this.router.navigate(["listProducts"]);
    });
  }

}
