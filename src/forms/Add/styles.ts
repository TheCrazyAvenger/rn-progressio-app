import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  textInput: {
    borderBottomWidth: 1.5,
    marginBottom: 25,
    width: 300,
  },
  block: {
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    backgroundColor: THEME.COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 15,
    elevation: 10,
  },
  title: {
    borderBottomColor: THEME.COLOR_RED,
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
  },
  calendar: {
    backgroundColor: THEME.COLOR_BLUE,
    marginTop: 15,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 20,
  },
});
