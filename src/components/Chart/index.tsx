import React from 'react';
import {Dimensions} from 'react-native';
import {UI} from '../../ui';
import {Typography} from '../Typography';
import {styles} from './styles';

type a = {
  ChartType: any;
  bezier?: boolean;
  title: string;
  data: any;
  yLabel?: string;
  backgroundColor: string;
  backgroundGradientFrom: string;
  backgroundGradientTo: string;
  strokeColor?: string;
  additionalProps?: any;
};

export const Chart: React.FC<a> = ({
  ChartType,
  bezier = false,
  title,
  data,
  yLabel,
  backgroundColor,
  backgroundGradientFrom,
  backgroundGradientTo,
  strokeColor,
  additionalProps,
}) => {
  return (
    <>
      <UI.Block>
        <Typography.Title>{title}</Typography.Title>
      </UI.Block>
      <UI.Block style={{padding: 0}}>
        <ChartType
          data={data}
          width={Dimensions.get('window').width}
          height={230}
          yAxisLabel=""
          yAxisSuffix={yLabel}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: backgroundColor,
            backgroundGradientFrom: backgroundGradientFrom,
            backgroundGradientTo: backgroundGradientTo,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {},
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: strokeColor,
            },
          }}
          bezier={bezier}
          style={styles.analytics}
          {...additionalProps}
        />
      </UI.Block>
    </>
  );
};
