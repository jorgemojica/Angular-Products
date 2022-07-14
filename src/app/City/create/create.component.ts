import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/Model/City';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  city: City = new City();
  save(city: City) {
    this.service.createCities(this.city).subscribe(city => {
      alert("City added");
      this.router.navigate(["listCities"]);
    });
  }

  back(){
    this.router.navigate(["listCities"]);
  }

}
