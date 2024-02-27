import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsInfoComponent } from './ongs-info.component';

describe('OngsInfoComponent', () => {
  let component: OngsInfoComponent;
  let fixture: ComponentFixture<OngsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
