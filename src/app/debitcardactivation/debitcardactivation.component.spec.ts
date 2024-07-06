import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardactivationComponent } from './debitcardactivation.component';

describe('DebitcardactivationComponent', () => {
  let component: DebitcardactivationComponent;
  let fixture: ComponentFixture<DebitcardactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitcardactivationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitcardactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
