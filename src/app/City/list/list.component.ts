import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/Model/City';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cities: City[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.listCities();
  }

  listCities(){
    this.service.listCities().subscribe(cities => {
      this.cities = cities;
    });
  }

  delete(city: City){
    this.service.deleteCities(city).subscribe(cities => {
      this.cities = this.cities.filter(cities => cities !== city);
    })
  }

  update(city: City){
    let id = localStorage.setItem("id", city.id.toString());
    this.router.navigate(["updateCities"]);
  }

  listStores(city: City){
    let id = localStorage.setItem("id", city.id.toString());
    let name = localStorage.setItem("name", city.name.toString());
    this.router.navigate(["listStores"]);
  }

}
