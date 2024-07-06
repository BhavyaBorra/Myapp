import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardstatusComponent } from './debitcardstatus.component';

describe('DebitcardstatusComponent', () => {
  let component: DebitcardstatusComponent;
  let fixture: ComponentFixture<DebitcardstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitcardstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitcardstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
