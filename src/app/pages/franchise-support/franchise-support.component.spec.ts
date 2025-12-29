import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FranchiseSupportComponent } from './franchise-support.component';

describe('FranchiseSupportComponent', () => {
  let component: FranchiseSupportComponent;
  let fixture: ComponentFixture<FranchiseSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranchiseSupportComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(FranchiseSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
