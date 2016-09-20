import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';

@NgModule({
  imports:      [ BrowserModule,
                  StoreModule.provideStore({ counter: counterReducer }, { counter: 0 })
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 

}
