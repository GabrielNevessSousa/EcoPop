import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntsComponent } from './punts.component';

describe('PuntsComponent', () => {
  let component: PuntsComponent;
  let fixture: ComponentFixture<PuntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
