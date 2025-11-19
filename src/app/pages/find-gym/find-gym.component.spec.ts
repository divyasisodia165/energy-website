import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGym } from './find-gym';

describe('FindGym', () => {
  let component: FindGym;
  let fixture: ComponentFixture<FindGym>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindGym]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindGym);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
