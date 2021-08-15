import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeImageSelectModalComponent } from './bike-image-select-modal.component';

describe('BikeImageSelectModalComponent', () => {
  let component: BikeImageSelectModalComponent;
  let fixture: ComponentFixture<BikeImageSelectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeImageSelectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeImageSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
