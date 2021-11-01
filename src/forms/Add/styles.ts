import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1.5,
    marginBottom: 25,
    minWidth: '100%',
  },
  title: {
    paddingBottom: 5,
    marginBottom: 10,
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
  markButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: THEME.COLOR_BLUE,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  button: {
    marginHorizontal: 10,
  },
  imageBlock: {
    padding: 0,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
