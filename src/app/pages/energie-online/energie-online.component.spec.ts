import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieOnline } from './energie-online.component';

describe('EnergieOnline', () => {
  let component: EnergieOnline;
  let fixture: ComponentFixture<EnergieOnline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergieOnline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergieOnline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
