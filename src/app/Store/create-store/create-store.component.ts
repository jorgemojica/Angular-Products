import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/Model/Store';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  store: Store = new Store();
  nameCity: String;
  idCity: number;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.nameCity = this.getNameCity()!;
    this.idCity = +this.getIdCity()!;
    this.getCityById(this.idCity);
  }

  getCityById(id: number){
    this.service.getCityById(id).subscribe(data => {
      this.store.city = data;
    });
  }

  save(store: Store){
    this.service.createStores(store).subscribe(store => {
      alert("Store added");
      this.router.navigate(["listStores"]);
    });
  }

  getNameCity(){
    let name = localStorage.getItem("name");
    return name;
  }

  getIdCity(){
    let id = localStorage.getItem("id");
    return id;
  }

}
