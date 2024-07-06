import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UahomeComponent } from './uahome.component';

describe('UahomeComponent', () => {
  let component: UahomeComponent;
  let fixture: ComponentFixture<UahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UahomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
