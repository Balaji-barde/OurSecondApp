import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorDashboardComponent } from './warrior-dashboard.component';

describe('WarriorDashboardComponent', () => {
  let component: WarriorDashboardComponent;
  let fixture: ComponentFixture<WarriorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarriorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
