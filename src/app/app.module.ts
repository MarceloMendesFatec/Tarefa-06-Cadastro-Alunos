import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    EditarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
