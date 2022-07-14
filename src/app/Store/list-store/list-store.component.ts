import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/Model/Store';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {

  stores: Store[];
  nameCity: String;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.listStores();
    this.nameCity = this.getNameCity()!;
  }

  listStores(){
    let id = localStorage.getItem("id");
    this.service.listStores(+id!).subscribe(stores => {
      this.stores = stores;
    });
  }

  deleteStores(store: Store){
    this.service.deleteStores(store).subscribe(stores => {
      this.stores = this.stores.filter(stores => stores !== store);
    });
  }

  updateStores(store: Store){
    let id = localStorage.setItem("idStore", store.id.toString());
    this.router.navigate(["updateStores"]);
  }

  listProducts(store: Store){
    let id = localStorage.setItem("idStore", store.id.toString());
    let nameStore = localStorage.setItem("nameStore", store.name.toString());
    this.router.navigate(["listProducts"]);
  }

  getNameCity(){
    let name = localStorage.getItem("name");
    return name;
  }

  createStore(){
    this.router.navigate(["createStore"]);
  }

}
