import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconsentComponent } from './userconsent.component';

describe('UserconsentComponent', () => {
  let component: UserconsentComponent;
  let fixture: ComponentFixture<UserconsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserconsentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
