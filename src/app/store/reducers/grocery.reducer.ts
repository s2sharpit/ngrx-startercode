import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initialState: Grocery[] = [
    { "id": 1, "name": "Milk", "type": "fruit"},
    { "id": 2, "name": "Banana", "type": "fruit"},
    { "id": 3, "name": "Lays Chips", "type": "snacks"},
    { "id": 4, "name": "Doritos", "type": "snacks"},
]

export const groceryReducer = createReducer(initialState);