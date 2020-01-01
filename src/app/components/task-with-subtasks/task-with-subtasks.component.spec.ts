import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskWithSubtasksComponent } from './task-with-subtasks.component';

describe('TaskWithSubtasksComponent', () => {
  let component: TaskWithSubtasksComponent;
  let fixture: ComponentFixture<TaskWithSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskWithSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskWithSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
