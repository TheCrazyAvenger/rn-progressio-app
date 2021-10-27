import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  block: {
    marginBottom: 15,
    position: 'relative',
    borderRadius: 15,
    backgroundColor: THEME.COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  inner: {
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLOR_WHITE,
  },
  bookmark: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
