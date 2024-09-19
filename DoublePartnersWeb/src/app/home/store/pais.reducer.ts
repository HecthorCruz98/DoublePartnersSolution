import { createReducer, on ,Action } from "@ngrx/store";
import { Country } from "../interfaces/pais.interface";
import { retrievedPaisList } from "./pais.actions";




export const initialState : ReadonlyArray<Country>=[];

export const paisReducer = createReducer(
    initialState,
    on(retrievedPaisList,(state, {Country})=>[...Country])

    
);