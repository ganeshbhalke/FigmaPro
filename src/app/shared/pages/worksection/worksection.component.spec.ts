import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksectionComponent } from './worksection.component';

describe('WorksectionComponent', () => {
  let component: WorksectionComponent;
  let fixture: ComponentFixture<WorksectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
