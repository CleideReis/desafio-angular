import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaContaComponent } from './consulta-conta.component';

describe('ConsultaContaComponent', () => {
  let component: ConsultaContaComponent;
  let fixture: ComponentFixture<ConsultaContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
