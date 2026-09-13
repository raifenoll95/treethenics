import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeCanvas } from './tree-canvas';

describe('TreeCanvas', () => {
  let component: TreeCanvas;
  let fixture: ComponentFixture<TreeCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCanvas],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeCanvas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
