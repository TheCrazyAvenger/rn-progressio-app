export interface IValues {
  name: string;
  date: string;
  path: string;
  description: string;
  rating: string;
  time: string;
  category: string;
}

export type GoalFormTypes = {
  callback?: any;
  type?: 'Modal';
  placeholder?: string;
};
