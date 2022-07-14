import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './City/create/create.component';
import { ListComponent } from './City/list/list.component';
import { UpdateComponent } from './City/update/update.component';
import { CreateGeneralProductComponent } from './Product/create-general-product/create-general-product.component';
import { CreateProductsComponent } from './Product/create-products/create-products.component';
import { ListGeneralProductComponent } from './Product/list-general-product/list-general-product.component';
import { ListProductsComponent } from './Product/list-products/list-products.component';
import { UpdateProductsComponent } from './Product/update-products/update-products.component';
import { CreateStoreComponent } from './Store/create-store/create-store.component';
import { ListStoreComponent } from './Store/list-store/list-store.component';
import { UpdateStoreComponent } from './Store/update-store/update-store.component';

const routes: Routes = [
  {path: 'listCities', component: ListComponent},
  {path: 'createCities', component: CreateComponent},
  {path: 'updateCities', component: UpdateComponent},
  {path: 'listStores', component: ListStoreComponent},
  {path: 'createStore', component: CreateStoreComponent},
  {path: 'updateStores', component: UpdateStoreComponent},
  {path: 'listProducts', component: ListProductsComponent},
  {path: 'createProduct', component: CreateProductsComponent},
  {path: 'listGeneralProducts', component: ListGeneralProductComponent},
  {path: 'createProductGeneral', component: CreateGeneralProductComponent},
  {path: 'updateGeneralProduct', component: UpdateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
