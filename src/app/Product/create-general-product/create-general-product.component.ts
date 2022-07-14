import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create-general-product',
  templateUrl: './create-general-product.component.html',
  styleUrls: ['./create-general-product.component.css']
})
export class CreateGeneralProductComponent implements OnInit {

  product: Products = new Products();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  save(product: Products){
    this.service.createProduct(product).subscribe(product => {
      alert("Product added");
      this.router.navigate(["listGeneralProducts"]);
    });
  }

}
