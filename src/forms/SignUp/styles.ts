import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  title: {
    paddingBottom: 5,
    marginBottom: 10,
  },
  signUp: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  authError: {
    color: THEME.COLOR_RED,
    marginTop: 15,
    textAlign: 'center',
  },
});
