import React, {useState} from 'react';
import {Formik} from 'formik';
import {Title, Description} from '../../components/Typography';
import {Screens, THEME} from '../../constants';
import {Button, Root, Block, TextButton} from '../../ui';
import {sighnInSchema} from '..';
import {styles} from './styles';
import I18n from 'i18n-js';
import {FormItem} from '../../components';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useNavigation} from '@react-navigation/core';
import {useAuthMutation} from '../../store/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authSucces, clearError, setError} from '../../store/slices/authSlice';

export const SignUp: React.FC = () => {
  const [type, setType] = useState('reg');

  const [auth] = useAuthMutation();
  const error = useAppSelector(state => state.auth.error);

  const dispatch = useAppDispatch();

  const navigation: any = useNavigation();

  const authItem = (text: string, buttonTitle: string, type: string) => {
    return (
      <View style={styles.signUp}>
        <Description>{I18n.t(text)}</Description>
        <TextButton
          title={I18n.t(buttonTitle)}
          onPress={() => {
            setType(type);
            dispatch(clearError());
          }}
          type="clear"
        />
      </View>
    );
  };

  const authHandler = async (values: {email: string; password: string}) => {
    const isLogin = type === 'reg' ? false : true;
    const authData = {...values, isLogin};
    const response: any = await auth(authData);

    const data = response.data;
    if (data) {
      dispatch(clearError());
      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000,
      );

      const userEmail = values.email;
      const token = data.idToken;

      await AsyncStorage.setItem('userEmail', JSON.stringify(values.email));
      await AsyncStorage.setItem(
        'token',
        JSON.stringify(response.data.idToken),
      );
      await AsyncStorage.setItem(
        'expirationDate',
        JSON.stringify(expirationDate),
      );
      dispatch(authSucces({userEmail, token}));

      navigation.navigate(Screens.settings);
    } else {
      dispatch(setError());
    }
  };

  return (
    <Formik
      validationSchema={sighnInSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => authHandler(values)}>
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
          <Root type="View" style={{justifyContent: 'center'}}>
            <Block>
              <Title style={styles.title}>{I18n.t(type)}</Title>

              <FormItem
                title={I18n.t('email')}
                value={values.email}
                onChange={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder={I18n.t('plEmail')}
                isTouched={touched.email}
                errorMessage={errors.email}
              />

              <FormItem
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

              <Button
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
              {error ? (
                <Description style={styles.authError}>
                  {error[type]}
                </Description>
              ) : null}
            </Block>
          </Root>
        );
      }}
    </Formik>
  );
};
