import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpUsuarioComponent } from './up-usuario.component';

describe('UpUsuarioComponent', () => {
  let component: UpUsuarioComponent;
  let fixture: ComponentFixture<UpUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
