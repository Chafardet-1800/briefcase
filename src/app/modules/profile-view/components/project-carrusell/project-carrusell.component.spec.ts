import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarrusellComponent } from './project-carrusell.component';

describe('ProjectCarrusellComponent', () => {
  let component: ProjectCarrusellComponent;
  let fixture: ComponentFixture<ProjectCarrusellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCarrusellComponent]
    });
    fixture = TestBed.createComponent(ProjectCarrusellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
