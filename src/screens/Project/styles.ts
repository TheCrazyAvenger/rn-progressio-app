import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  block: {
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    backgroundColor: THEME.COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 15,

    elevation: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  title: {
    borderBottomColor: THEME.COLOR_RED,
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 15,
  },
  info: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoText: {
    color: THEME.COLOR_GRAY,
  },
  infoInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
  },
});
