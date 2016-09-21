import { Component, NgModule, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store, StoreModule } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';
import {AppState} from './store/AppState';
// import { provideRouter, RouterConfig } from '@angular/router';

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
    counter$: Observable<number>;

    constructor(    
        private store: Store<AppState>
    ){
        this.counter$ = store.select<number>('counter');
    }

    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }

}

