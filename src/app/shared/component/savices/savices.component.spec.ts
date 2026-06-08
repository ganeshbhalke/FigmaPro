import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavicesComponent } from './savices.component';

describe('SavicesComponent', () => {
  let component: SavicesComponent;
  let fixture: ComponentFixture<SavicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
