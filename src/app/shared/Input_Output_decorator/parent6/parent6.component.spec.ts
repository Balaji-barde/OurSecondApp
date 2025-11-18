import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent6Component } from './parent6.component';

describe('Parent6Component', () => {
  let component: Parent6Component;
  let fixture: ComponentFixture<Parent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
