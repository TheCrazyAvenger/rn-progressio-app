import * as yup from 'yup';

export let schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'At least 3 letters')
    .matches(/^[a-zA-Z ]+$/, {message: 'Use only letters'})
    .max(16, 'Only 16 letters'),
  description: yup
    .string()
    .required('Description is required')
    .min(3, 'At least 3 letters')
    .matches(/^[a-zA-Z ',.?""''!]+$/, {message: 'Use only letters'}),
  category: yup
    .string()
    .required('Category is required')
    .min(3, 'At least 3 letters')
    .matches(/^[a-zA-Z ]+$/, {message: 'Use only letters'})
    .max(16, 'Only 16 letters'),
  rating: yup.number().required('Choose one'),
  time: yup.number().required('Time is required').max(999, `It's too much`),
  date: yup.string().required('Choose date'),
  path: yup.string().required('Add a photo'),
});

export let goalSchema = yup.object().shape({
  goal: yup
    .number()
    .required('Goal is required')
    .max(100, '100 is quiet enough'),
});
