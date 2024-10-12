import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalComponent } from './login-modal.component';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyModalComponent]
    });
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});