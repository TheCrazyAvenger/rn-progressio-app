import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: THEME.COLOR_WHITE,
    height: 70,
  },
  headerStyle: {
    backgroundColor: THEME.COLOR_WHITE,
    height: 60,
  },
  titleStyle: {
    color: THEME.COLOR_GRAY,
    fontSize: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
