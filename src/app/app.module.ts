
import { NgModule }      from '@angular/core';
// run app inside of the browser
import { BrowserModule } from '@angular/platform-browser';

// root component of the application
import { AppComponent }  from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';

// functions that add extra metadata, started with @
// provides information for the class AppModule below
// Declarations Array: add components to ngModules
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
