import {StyleSheet} from 'react-native';
import {THEME} from '../../constants';

export const styles = StyleSheet.create({
  formPicker: {
    borderBottomWidth: 1.5,
    marginBottom: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modalItem: {
    width: 90,
    height: 90,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    maxWidth: '90%',
    textAlign: 'center',

    marginTop: 5,
  },
});
