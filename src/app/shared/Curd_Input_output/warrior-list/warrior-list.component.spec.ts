import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorListComponent } from './warrior-list.component';

describe('WarriorListComponent', () => {
  let component: WarriorListComponent;
  let fixture: ComponentFixture<WarriorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarriorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
