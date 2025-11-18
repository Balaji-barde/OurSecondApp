import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCurdComponent } from './std-curd.component';

describe('StdCurdComponent', () => {
  let component: StdCurdComponent;
  let fixture: ComponentFixture<StdCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
