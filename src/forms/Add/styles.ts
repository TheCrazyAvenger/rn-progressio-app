import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: THEME.COLOR_WHITE,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 15,
    borderRadius: 15,
  },
  textInput: {
    borderBottomWidth: 1.5,
    marginBottom: 25,
  },
});
