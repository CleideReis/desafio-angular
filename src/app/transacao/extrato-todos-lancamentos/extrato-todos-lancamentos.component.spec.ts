import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoTodosLancamentosComponent } from './extrato-todos-lancamentos.component';

describe('ExtratoTodosLancamentosComponent', () => {
  let component: ExtratoTodosLancamentosComponent;
  let fixture: ComponentFixture<ExtratoTodosLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoTodosLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoTodosLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
