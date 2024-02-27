import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDonarComponent } from './pagina-donar.component';

describe('PaginaDonarComponent', () => {
  let component: PaginaDonarComponent;
  let fixture: ComponentFixture<PaginaDonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDonarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
