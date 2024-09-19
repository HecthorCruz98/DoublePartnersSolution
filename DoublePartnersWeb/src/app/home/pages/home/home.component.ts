import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { AppState } from '../../store/app.state';
import { retrievedPaisList } from '../../store/pais.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  regiones : string[]=['africa','americas', 'asia','europe','oceania'];
  regionActiva: string='';

  paises: Observable<Country[]>= new Observable;


  constructor(private paisService: PaisService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

   activarRegion (region: string)
  {
    if (region===this.regionActiva) {
      return;
    }
    
    this.regionActiva=region;
    this.paisService.buscarRegion(region)
    .subscribe((Country:Country[])=>{  this.store.dispatch(retrievedPaisList({Country}));
      
    });
    
     this.paises=this.store.select(state => state.countrys);
    
  }

}
