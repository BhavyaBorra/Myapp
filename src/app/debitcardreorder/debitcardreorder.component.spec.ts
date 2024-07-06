import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardreorderComponent } from './debitcardreorder.component';

describe('DebitcardreorderComponent', () => {
  let component: DebitcardreorderComponent;
  let fixture: ComponentFixture<DebitcardreorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitcardreorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitcardreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
