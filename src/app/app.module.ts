import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { MaterialModule} from '@angular/material';
import {MdIconRegistry} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SuppliesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    MdIconRegistry

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
