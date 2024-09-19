import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { getCoutry } from '../../store/pais.selector';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor:pointer;
  }
  `
  ]
})
export class PorPaisComponent {

  termino: string='';
  hayError: boolean= false;
  paises:  Observable<Country[]>= new Observable;
  
  paisesSugeridos : Country[]=[];
  mostrarSugerencias :boolean=false;

  constructor(private paiseService: PaisService, private store: Store) { }

  buscar(termino :string){
    this.paises = this.store.select(getCoutry,{ id: termino});
    console.log(this.paises);
    
  }

  sugerencias(termino :string){
   
  }

  buscarSugerido(termino: string){
      this.buscar(termino);
    
  }

}
