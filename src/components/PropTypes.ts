type DataType = {
  name: string;
  id: number;
  date: string;
  booked: boolean;
  img: string;
};

export type ProjectItemProps = {
  data: DataType;
};

export type EmptyListProps = {
  title: string;
  description?: string;
};

export type FormItemProps = {
  title?: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  isTouched: any;
  errorMessage: any;
  errorStyle?: any;
  style?: any;
};

export type FormPickerProps = {
  setCategoryValue: any;
  placeholder: string;
  errorMessage: any;
  isTouched: any;
};
