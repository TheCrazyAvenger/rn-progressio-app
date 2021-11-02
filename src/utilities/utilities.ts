import {THEME} from '../theme';

export const setColor = (theme: string, color?: string) =>
  theme !== 'dark' ? THEME.COLOR_GRAY : color ? color : THEME.COLOR_WHITE;
