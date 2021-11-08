import {Formik} from 'formik';
import React from 'react';
import {View, TextInput} from 'react-native';
import {THEME} from '../../constants';
import {GoalFormTypes, goalSchema} from '..';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Block, Button} from '../../ui';
import {setGoal} from '../../store/slices/addSlice';
import {setColor} from '../../utilities/utilities';
import {FormItem} from '../../components';

export const Goal: React.FC<GoalFormTypes> = ({
  callback,
  type,
  placeholder,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
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
          <Block>
            <View style={styles.inputView}>
              <FormItem isTouched={touched.goal} errorMessage={errors.goal}>
                <View style={{position: 'relative'}}>
                  <TextInput
                    keyboardType={'number-pad'}
                    placeholderTextColor={setColor(theme)}
                    style={{
                      ...styles.textInput,
                      color: setColor(theme),
                      borderBottomColor:
                        errors.goal && touched.goal
                          ? THEME.COLOR_RED
                          : setColor(theme),
                    }}
                    value={values.goal}
                    onChangeText={handleChange('goal')}
                    onBlur={() => setFieldTouched('goal')}
                    placeholder={placeholder}
                  />
                </View>
              </FormItem>

              <Button
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
                <Button
                  color={THEME.COLOR_WHITE}
                  style={{
                    marginLeft: 15,
                  }}
                  name="close-outline"
                  callback={callback}
                />
              )}
            </View>
          </Block>
        );
      }}
    </Formik>
  );
};
