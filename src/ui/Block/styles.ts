import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  block: {
    position: 'relative',
    marginBottom: 10,
    alignSelf: 'center',
    width: '98%',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,

    elevation: 3,
  },
});
