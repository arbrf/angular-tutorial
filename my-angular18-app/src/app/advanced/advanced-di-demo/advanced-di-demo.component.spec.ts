import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDiDemoComponent } from './advanced-di-demo.component';

describe('AdvancedDiDemoComponent', () => {
  let component: AdvancedDiDemoComponent;
  let fixture: ComponentFixture<AdvancedDiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedDiDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedDiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
