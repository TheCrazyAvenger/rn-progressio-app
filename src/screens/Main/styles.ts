import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingHorizontal: 5,
  },
  block: {
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    color: THEME.COLOR_GRAY,
  },
  container: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  inner: {
    position: 'absolute',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    padding: 5,
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
