import {useNavigation, useRoute} from '@react-navigation/core';
import {Formik} from 'formik';
import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {THEME} from '../../theme';
import {GoalFormTypes, goalSchema} from '..';
import {styles} from './styles';
import {useAppDispatch} from '../../store/hooks';
import {UI} from '../../ui';
import {setGoal} from '../../store/slices/addSlice';

export const Goal: React.FC<GoalFormTypes> = ({
  callback,
  type,
  placeholder,
}) => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const dispatch = useAppDispatch();

  const updateGoal = (goal: number) => {
    if (type === 'Modal') callback();
    dispatch(setGoal(goal));
  };

  return (
    <Formik
      validationSchema={goalSchema}
      initialValues={{
        goal: '',
      }}
      onSubmit={values => updateGoal(+values.goal)}>
      {({
        values,
        handleChange,
        setFieldTouched,
        errors,
        touched,
        isValid,
        handleSubmit,
      }) => {
        return (
          <UI.Block>
            <View style={styles.inputView}>
              <View style={{position: 'relative'}}>
                <TextInput
                  keyboardType={'number-pad'}
                  style={{
                    ...styles.textInput,
                    borderBottomColor:
                      errors.goal && touched.goal
                        ? THEME.COLOR_RED
                        : THEME.COLOR_GRAY,
                  }}
                  value={values.goal}
                  onChangeText={handleChange('goal')}
                  onBlur={() => setFieldTouched('goal')}
                  placeholder={placeholder}
                />
                {errors.goal && touched.goal && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: 55,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.goal}
                  </Text>
                )}
              </View>
              <UI.Button
                color={THEME.COLOR_WHITE}
                style={{
                  marginLeft: 15,
                  backgroundColor: isValid
                    ? THEME.COLOR_BLUE
                    : THEME.COLOR_GRAY,
                }}
                name="checkmark-outline"
                disabled={!isValid}
                callback={handleSubmit}
              />
              {callback && (
                <UI.Button
                  color={THEME.COLOR_WHITE}
                  style={{
                    marginLeft: 15,
                  }}
                  name="close-outline"
                  callback={callback}
                />
              )}
            </View>
          </UI.Block>
        );
      }}
    </Formik>
  );
};
