import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputNumberComponent } from './my-input-number.component';

describe('MyInputNumberComponent', () => {
  let component: MyInputNumberComponent;
  let fixture: ComponentFixture<MyInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
