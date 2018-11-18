import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import{ RouterModule }   from '@angular/router';
 
import { routing } from './app.routing';

import { RupeekService } from './services/rupeek.service';

import { AppComponent } from './app.component';
import { RupeekComponent } from './components/rupeek/rupeek.component';

@NgModule({
  declarations: [
    AppComponent,
    RupeekComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [
    RupeekService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
