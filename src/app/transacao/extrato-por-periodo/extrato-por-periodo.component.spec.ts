import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoPorPeriodoComponent } from './extrato-por-periodo.component';

describe('ExtratoPorPeriodoComponent', () => {
  let component: ExtratoPorPeriodoComponent;
  let fixture: ComponentFixture<ExtratoPorPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoPorPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoPorPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
