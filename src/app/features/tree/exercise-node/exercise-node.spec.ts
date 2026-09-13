import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseNode } from './exercise-node';

describe('ExerciseNode', () => {
  let component: ExerciseNode;
  let fixture: ComponentFixture<ExerciseNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseNode],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
