import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/Model/Store';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getIdStore();
  }

  store: Store = new Store();
  getIdStore(){
    let id = localStorage.getItem("idStore");
    this.service.getStoreById(+id!).subscribe(id => {
      console.log(id);
      this.store = id;
    })
  }

  update(store: Store){
    this.service.updateStores(store).subscribe(data => {
      this.store = store;
      console.log(data);
      alert("Stored updated");
      this.router.navigate(["listStores"]);
    })
  }

}
