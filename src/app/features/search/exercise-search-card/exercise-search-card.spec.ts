import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseSearchCard } from './exercise-search-card';

describe('ExerciseSearchCard', () => {
  let component: ExerciseSearchCard;
  let fixture: ComponentFixture<ExerciseSearchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSearchCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseSearchCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
