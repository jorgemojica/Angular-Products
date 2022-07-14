import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  product: Products = new Products();
  products: Products[];
  seleccionado: number;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts(){
    this.service.listProducts().subscribe(products => {
      this.products = products;
    })
  }

  save(seleccionado: number){
    let idP = localStorage.setItem("idProduct", seleccionado.toString());
    let idProduct = localStorage.getItem("idProduct");
    let idStore = localStorage.getItem("idStore");
    this.service.addStoreProduct(+idStore!, +idProduct!).subscribe(data =>{
      alert("Product added");
      this.router.navigate(["listProducts"]);
    });
  }

}
