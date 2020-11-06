import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationsComponent } from './vacations/vacations.component';
import { HomeComponent } from './home/home.component';
import { NewspaperService } from './newspaper.service';

@NgModule({
  declarations: [
    AppComponent,
    VacationsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NewspaperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
