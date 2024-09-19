import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionUsuariosComponent } from './autenticacion-usuarios.component';

describe('AutenticacionUsuariosComponent', () => {
  let component: AutenticacionUsuariosComponent;
  let fixture: ComponentFixture<AutenticacionUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
