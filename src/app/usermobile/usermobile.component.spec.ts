import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermobileComponent } from './usermobile.component';

describe('UsermobileComponent', () => {
  let component: UsermobileComponent;
  let fixture: ComponentFixture<UsermobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsermobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsermobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
