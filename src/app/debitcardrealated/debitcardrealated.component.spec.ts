import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardrealatedComponent } from './debitcardrealated.component';

describe('DebitcardrealatedComponent', () => {
  let component: DebitcardrealatedComponent;
  let fixture: ComponentFixture<DebitcardrealatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitcardrealatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitcardrealatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
