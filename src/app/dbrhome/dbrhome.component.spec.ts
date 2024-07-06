import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbrhomeComponent } from './dbrhome.component';

describe('DbrhomeComponent', () => {
  let component: DbrhomeComponent;
  let fixture: ComponentFixture<DbrhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbrhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
