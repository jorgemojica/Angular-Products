import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './City/list/list.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './City/create/create.component';
import { UpdateComponent } from './City/update/update.component';
import { CreateStoreComponent } from './Store/create-store/create-store.component';
import { ListStoreComponent } from './Store/list-store/list-store.component';
import { UpdateStoreComponent } from './Store/update-store/update-store.component';
import { ListProductsComponent } from './Product/list-products/list-products.component';
import { CreateProductsComponent } from './Product/create-products/create-products.component';
import { UpdateProductsComponent } from './Product/update-products/update-products.component';
import { ListGeneralProductComponent } from './Product/list-general-product/list-general-product.component';
import { CreateGeneralProductComponent } from './Product/create-general-product/create-general-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    CreateStoreComponent,
    ListStoreComponent,
    UpdateStoreComponent,
    ListProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    ListGeneralProductComponent,
    CreateGeneralProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
