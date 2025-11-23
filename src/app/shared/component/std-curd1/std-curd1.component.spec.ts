import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCurd1Component } from './std-curd1.component';

describe('StdCurd1Component', () => {
  let component: StdCurd1Component;
  let fixture: ComponentFixture<StdCurd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCurd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCurd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
