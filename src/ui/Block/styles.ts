import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  block: {
    position: 'relative',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 15,
    alignItems: 'center',
    backgroundColor: THEME.COLOR_WHITE,
    elevation: 4,
  },
});
