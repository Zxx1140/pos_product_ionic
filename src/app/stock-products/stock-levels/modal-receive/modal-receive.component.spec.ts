import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalReceiveComponent } from './modal-receive.component';

describe('ModalReceiveComponent', () => {
  let component: ModalReceiveComponent;
  let fixture: ComponentFixture<ModalReceiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalReceiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
