import { createAction, props } from "@ngrx/store";
import { Country } from '../interfaces/pais.interface';




export const retrievedPaisList = createAction(
    '[Client Collection] Retrieve Clients Success',
    props<{ Country: Country[] }>()
)
