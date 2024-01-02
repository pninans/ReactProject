import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrudentDetailsComponent } from './srudent-details.component';

describe('SrudentDetailsComponent', () => {
  let component: SrudentDetailsComponent;
  let fixture: ComponentFixture<SrudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrudentDetailsComponent]
    });
    fixture = TestBed.createComponent(SrudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
