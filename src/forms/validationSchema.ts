import I18n from 'i18n-js';
import * as yup from 'yup';

export let schema = yup.object().shape({
  name: yup
    .string()
    .required(I18n.t('scName'))
    .min(3, I18n.t('scMin'))
    .matches(/^[a-zA-Z ]+$/, {message: I18n.t('scMatches')})
    .max(12, I18n.t('scMax')),
  description: yup
    .string()
    .required(I18n.t('scDescription'))
    .min(3, I18n.t('scMin'))
    .matches(/^[a-zA-Z ',.?""''!]+$/, {message: I18n.t('scMatches')}),
  category: yup
    .string()
    .required(I18n.t('scCategory'))
    .min(3, I18n.t('scMin'))
    .matches(/^[a-zA-Z ]+$/, {message: I18n.t('scMatches')})
    .max(12, 'Only 12 letters'),
  rating: yup.number().required(I18n.t('scRating')),
  time: yup.number().required(I18n.t('scTime')).max(999, I18n.t('scTimeMax')),
  date: yup.string().required(I18n.t('scDate')),
  path: yup.string().required(I18n.t('scPhoto')),
});

export let goalSchema = yup.object().shape({
  goal: yup.number().required(I18n.t('scGoal')).max(100, I18n.t('scGoalMax')),
});

export let sighnInSchema = yup.object().shape({
  nickname: yup
    .string()
    .required(I18n.t('scNickname'))
    .min(3, I18n.t('scMin'))
    .matches(/^[a-zA-Z ]+$/, {message: I18n.t('scMatches')})
    .max(12, I18n.t('scMax')),
  email: yup.string().email().required(I18n.t('scEmail')),
  password: yup
    .string()
    .required(I18n.t('scPassword'))
    .min(8, I18n.t('scPasswordMin'))
    .matches(/^[a-zA-Z0-9?@%#&!]+$/, {message: I18n.t('scPasswordMatches')}),
});
