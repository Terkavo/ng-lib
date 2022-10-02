import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadioComponent } from './my-radio.component';

describe('MyRadioComponent', () => {
  let component: MyRadioComponent;
  let fixture: ComponentFixture<MyRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
