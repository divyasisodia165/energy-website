import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFriend } from './refer-friend.component';

describe('ReferFriend', () => {
  let component: ReferFriend;
  let fixture: ComponentFixture<ReferFriend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferFriend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferFriend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
