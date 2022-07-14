import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../Model/City';
import { Store } from '../Model/Store';
import { Products } from '../Model/Products';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  cities: City[];
  stores: Store[];
  products: Products[];
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/';

  listCities(){
    return this.http.get<City[]>(this.url + "city");
  }

  createCities(city: City){
    return this.http.post<City>(this.url + "city", city);
  }

  deleteCities(city: City){
    return this.http.delete<City>(this.url + "city" + "/" + city.id);
  }

  getCityById(id: number){
    return this.http.get<City>(this.url + "city" + "/" + id);
  }

  updateCities(city: City){
    return this.http.put<City>(this.url + "city", city);
  }

  listStores(id: number){
    return this.http.get<Store[]>(this.url + "store/idCity/" + id)
  }

  createStores(store: Store){
    return this.http.post<Store>(this.url + "store", store);
  }

  deleteStores(store: Store){
    return this.http.delete<Store>(this.url + "store/" + store.id);
  }

  getStoreById(id: number){
    return this.http.get<Store>(this.url + "store/" + id)
  }

  updateStores(store: Store){
    return this.http.put<Store>(this.url + "store", store);
  }

  listProductsByStore(id:number){
    return this.http.get<Products[]>(this.url + "products/store/" + id);
  }

  listProducts(){
    return this.http.get<Products[]>(this.url + "products");
  }

  addStoreProduct(idStore: number, idProduct: number){
    return this.http.post(this.url + "products/addstoreproduct/" + idStore + "/" + idProduct, null);
  }

  deleteStoreProduct(idStore: number, idProduct: number){
    return this.http.delete(this.url + "products/deletestoreproduct/" + idStore + "/" + idProduct);
  }

  createProduct(product: Products){
    return this.http.post<Products>(this.url + "products", product);
  }

  getProductById(id: number){
    return this.http.get<Products>(this.url + "products/" + id);
  }

  updateProducts(products: Products){
    return this.http.put<Products>(this.url + "products", products);
  }

  deleteProducts(id: number){
    return this.http.delete<Products>(this.url + "products/" + id);
  }

}
