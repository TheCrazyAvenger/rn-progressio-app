import {THEME} from '../constants/theme';

export const setColor = (theme: boolean, color?: string) =>
  !theme ? THEME.COLOR_GRAY : color ? color : THEME.COLOR_WHITE;
