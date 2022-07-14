import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/Model/City';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getIdCity();
  }

  city: City = new City();
  getIdCity(){
    let id = localStorage.getItem("id");
    this.service.getCityById(+id!).subscribe(id => {
      this.city = id;
    });
  }

  update(city: City){
    let id = this.service.getCityById(city.id);
    this.service.updateCities(city).subscribe(city => {
      this.city = city;
      alert("City updated");
      this.router.navigate(["listCities"]);
    })
  }

}
