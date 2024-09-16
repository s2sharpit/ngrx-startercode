import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';

@Injectable()
export class groceriesEffects {

  loadGroceries$ = createEffect(() => this.actions$.pipe(
    ofType(groceryAction.loadGroceries),
    exhaustMap(() => this.groceryService.fetchAllGroceries()
      .pipe(
        map((groceries:any) => groceryAction.loadGroceriesSuccess({payload: groceries})),
        catchError(() => of(groceryAction.loadGroceriesFailure()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private groceryService: GroceryService
  ) {}
}