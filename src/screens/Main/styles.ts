import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  root: {
    flex: 0.9,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    color: THEME.COLOR_GRAY,
  },
});
