import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  renderInfo: {
    marginHorizontal: 40,
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    borderBottomColor: THEME.COLOR_RED,
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 15,
  },
  info: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
