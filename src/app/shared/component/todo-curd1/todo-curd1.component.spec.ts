import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCurd1Component } from './todo-curd1.component';

describe('TodoCurd1Component', () => {
  let component: TodoCurd1Component;
  let fixture: ComponentFixture<TodoCurd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCurd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCurd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
