import { Component, NgModule, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store, StoreModule } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';
// import { provideRouter, RouterConfig } from '@angular/router';
// import { NewsDetailComponent } from './pages/news/news-detail.component';

interface AppState {
  counter: any;
}

@Component({
    selector: 'my-app',
    template: `<h1>ISB</h1>
                <button (click)="increment()">+</button>
                <button (click)="decrement()">-</button>
                <h3>{{counter$ | async}}</h3>
            `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent { 
    counter$: Observable<any>;

    constructor(
        private store : Store<number>
    ){
        this.counter$ = store.select('counter');
    }

    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }
}

