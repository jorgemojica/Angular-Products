import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products';

  constructor(private router: Router) { }

  listCities() {
    this.router.navigate(["listCities"]);
  }

  createCities(){
    this.router.navigate(["createCities"]);
  }

  listGeneralProducts(){
    this.router.navigate(["listGeneralProducts"]);
  }

}
