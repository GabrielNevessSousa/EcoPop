import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDonarProductosComponent } from './pagina-donar-productos.component';

describe('PaginaDonarProductosComponent', () => {
  let component: PaginaDonarProductosComponent;
  let fixture: ComponentFixture<PaginaDonarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDonarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDonarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
