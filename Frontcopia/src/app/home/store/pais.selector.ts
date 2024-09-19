import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "../interfaces/pais.interface";




export const getGameFeatureState = createFeatureSelector<Country[]>('countrys');


export const getCoutry   = createSelector(
  getGameFeatureState,
  (state: Country[], props: { id: string; }) =>{ 
    let respuesta  =state.filter((c: Country) => c.name == props.id)
    return respuesta;
  }
    );
