import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeatableTextComponent } from './updeatable-text.component';

describe('UpdeatableTextComponent', () => {
  let component: UpdeatableTextComponent;
  let fixture: ComponentFixture<UpdeatableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdeatableTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdeatableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
