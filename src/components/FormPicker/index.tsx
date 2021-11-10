import React, {useState} from 'react';
import {Text, Modal, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FormPickerProps} from '../index';
import {THEME} from '../../constants';
import {useAppSelector} from '../../store/hooks';

import {styles} from './styles';
import {setColor} from '../../utilities/utilities';
import {Button, Root} from '../../ui';
import {Subtitle} from '../Typography';

export const FormPicker: React.FC<FormPickerProps> = ({
  setCategoryValue,
  placeholder,
  errorMessage,
  isTouched,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState('');

  const categories = [
    {name: 'Furniture', icon: 'home', color: '#FD525B'},
    {name: 'Cars', icon: 'car', color: '#FD8B3A'},
    {name: 'Cameras', icon: 'camera', color: '#FECD29'},
    {name: 'Games', icon: 'game-controller', color: '#21DA76'},
    {name: 'Clothing', icon: 'shirt', color: '#25C4B2'},
    {name: 'Sports', icon: 'basketball', color: '#3CA0EF'},
    {name: 'Movies & Music', icon: 'musical-note', color: '#436FE9'},
    {name: 'Books', icon: 'book', color: '#9D53E8'},
    {name: 'Other', icon: 'browsers', color: '#6C8099'},
  ];

  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <Root style={{backgroundColor: theme ? '#191919' : THEME.COLOR_WHITE}}>
          <View style={styles.categories}>
            {categories.map(item => {
              return (
                <TouchableOpacity
                  key={item.name}
                  style={{alignItems: 'center', margin: 15}}
                  activeOpacity={0.7}
                  onPress={() => {
                    setCategoryValue(item.name);
                    setVisible(false);
                    setCategory(item.name);
                  }}>
                  <View
                    style={{
                      ...styles.modalItem,
                      backgroundColor: item.color,
                    }}>
                    <Icon
                      name={item.icon}
                      size={40}
                      color={THEME.COLOR_WHITE}
                    />
                  </View>
                  <Subtitle style={{...styles.modalText}}>{item.name}</Subtitle>
                </TouchableOpacity>
              );
            })}
          </View>
          <Button
            name="close-outline"
            color={THEME.COLOR_WHITE}
            callback={() => setVisible(false)}
            style={{alignSelf: 'center'}}
          />
        </Root>
      </Modal>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setVisible(true)}
        style={{
          ...styles.formPicker,
          borderBottomColor:
            errorMessage && isTouched ? THEME.COLOR_RED : setColor(theme),
        }}>
        <Text style={{color: setColor(theme)}}>
          {category !== '' ? category : placeholder}
        </Text>
        <Icon name="chevron-down" size={18} />
      </TouchableOpacity>
    </>
  );
};
