import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit  {
  
  @Input() placeHolder : string= '';

  @Output() onEnter :EventEmitter<string> = new EventEmitter();
  @Output() onDebounce :EventEmitter<string> = new EventEmitter();

  debouncer : Subject<string>=new Subject();
  
  termino : string ='';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }

  teclapresionada(){
    this.debouncer.next(this.termino)
  
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
}
