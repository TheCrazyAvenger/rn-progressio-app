import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  renderInfo: {
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    marginBottom: 10,
  },
  info: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
