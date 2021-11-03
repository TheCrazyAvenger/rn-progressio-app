import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {EmptyListProps} from '..';
import {useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';
import {Typography} from '../Typography';
import {styles} from './styles';

export const EmptyList: React.FC<EmptyListProps> = ({title, description}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <View style={styles.noData}>
      <Icon name="document-outline" color={setColor(theme)} size={100} />
      <View style={styles.info}>
        <Typography.Title>{title}</Typography.Title>
        {description ? (
          <Typography.Description style={{textAlign: 'center'}}>
            {description}
          </Typography.Description>
        ) : null}
      </View>
    </View>
  );
};
