export type ExerciseRelationType =
  | 'progression'
  | 'regression'
  | 'variation'
  | 'related';

export interface ExerciseRelation {
  from: string;
  to: string;
  type: ExerciseRelationType;
}
