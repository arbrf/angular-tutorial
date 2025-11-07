import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcoreComponent } from './angularcore.component';

describe('AngularcoreComponent', () => {
  let component: AngularcoreComponent;
  let fixture: ComponentFixture<AngularcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularcoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
