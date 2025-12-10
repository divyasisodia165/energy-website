import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieBlog } from './energie-blog.component';

describe('EnergieBlog', () => {
  let component: EnergieBlog;
  let fixture: ComponentFixture<EnergieBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergieBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergieBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
