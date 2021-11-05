import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1.5,
    marginBottom: 10,
    minWidth: '35%',
  },
  title: {
    paddingBottom: 5,
    marginBottom: 10,
  },
});
