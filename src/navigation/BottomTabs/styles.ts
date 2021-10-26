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
    backgroundColor: 'red',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 15,
  },
});
