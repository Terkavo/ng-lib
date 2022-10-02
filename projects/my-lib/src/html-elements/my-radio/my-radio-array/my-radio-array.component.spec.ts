import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadioArrayComponent } from './my-radio-array.component';

describe('MyRadioArrayComponent', () => {
  let component: MyRadioArrayComponent;
  let fixture: ComponentFixture<MyRadioArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRadioArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRadioArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
