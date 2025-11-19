import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorFormComponent } from './warrior-form.component';

describe('WarriorFormComponent', () => {
  let component: WarriorFormComponent;
  let fixture: ComponentFixture<WarriorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarriorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
