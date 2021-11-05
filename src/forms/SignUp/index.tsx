import React, {useState} from 'react';
import {Formik} from 'formik';
import {Typography} from '../../components/Typography';
import {THEME} from '../../theme';
import {UI} from '../../ui';
import {sighnInSchema} from '..';
import {styles} from './styles';
import I18n from 'i18n-js';

import {Components} from '../../components';
import {View} from 'react-native';
import {auth} from '../../store/actions/auth';
import {useAppDispatch} from '../../store/hooks';
import {useNavigation} from '@react-navigation/core';

export const SignUp: React.FC = () => {
  const [type, setType] = useState('reg');

  const dispatch = useAppDispatch();

  const navigation: any = useNavigation();

  const authItem = (text: string, buttonTitle: string, type: string) => {
    return (
      <View style={styles.signUp}>
        <Typography.Description>{I18n.t(text)}</Typography.Description>
        <UI.TextButton
          title={I18n.t(buttonTitle)}
          onPress={() => setType(type)}
          type="clear"
        />
      </View>
    );
  };

  const authHandler = (
    values: {email: string; password: string},
    isLogin: boolean,
  ) => {
    const data = {...values, isLogin};
    dispatch(auth(data));
    navigation.navigate('Setting');
  };

  return (
    <Formik
      validationSchema={sighnInSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => authHandler(values, false)}>
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
          <UI.Root type="View" style={{justifyContent: 'center'}}>
            <UI.Block>
              <Typography.Title style={styles.title}>
                {I18n.t(type)}
              </Typography.Title>

              <Components.FormItem
                title={I18n.t('email')}
                value={values.email}
                onChange={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder={I18n.t('plEmail')}
                isTouched={touched.email}
                errorMessage={errors.email}
              />

              <Components.FormItem
                title={I18n.t('password')}
                value={values.password}
                onChange={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder={I18n.t('plPassword')}
                isTouched={touched.password}
                errorMessage={errors.password}
                style={{marginBottom: 10}}
              />
              {type === 'login'
                ? authItem('signUpMessage', 'signUp', 'reg')
                : authItem('signInMessage', 'signIn', 'login')}

              <UI.Button
                color={THEME.COLOR_WHITE}
                style={{
                  backgroundColor: isValid
                    ? THEME.COLOR_BLUE
                    : THEME.COLOR_GRAY,
                }}
                name="checkmark-outline"
                disabled={!isValid}
                callback={handleSubmit}
              />
            </UI.Block>
          </UI.Root>
        );
      }}
    </Formik>
  );
};
