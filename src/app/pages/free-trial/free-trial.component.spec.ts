import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrial } from './free-trial.component';

describe('FreeTrial', () => {
  let component: FreeTrial;
  let fixture: ComponentFixture<FreeTrial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTrial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTrial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
