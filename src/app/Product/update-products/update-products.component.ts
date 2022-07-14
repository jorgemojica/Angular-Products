import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  product: Products = new Products();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getProductById(this.product.id);
  }

  getProductById(id: number){
    let idProduct = localStorage.getItem("idProduct");
    this.service.getProductById(+idProduct!).subscribe(product => {
      this.product = product;
    });
  }

  update(product: Products){
    this.service.updateProducts(product).subscribe(product => {
      this.product = product;
      alert("Product updated");
    })
  }

}
