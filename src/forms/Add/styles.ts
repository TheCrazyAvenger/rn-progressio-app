import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  rating: {
    marginVertical: 15,
    minWidth: '100%',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 10,
  },
  calendar: {
    backgroundColor: THEME.COLOR_BLUE,
    marginTop: 15,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '100%',
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
