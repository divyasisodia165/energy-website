import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnAGym } from './own-a-gym.component';

describe('OwnAGym', () => {
  let component: OwnAGym;
  let fixture: ComponentFixture<OwnAGym>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnAGym]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnAGym);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
