import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDonarDineroComponent } from './pagina-donar-dinero.component';

describe('PaginaDonarDineroComponent', () => {
  let component: PaginaDonarDineroComponent;
  let fixture: ComponentFixture<PaginaDonarDineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDonarDineroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDonarDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
