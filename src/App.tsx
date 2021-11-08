import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/AppNavigator';
import {store} from './store/store';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import SplashScreen from 'react-native-splash-screen';

import {en, ru} from './i18n/locals';

i18n.fallbacks = true;

i18n.translations = {
  en,
  ru,
};

const App: React.FC = () => {
  useEffect(() => {
    const lang = RNLocalize.getLocales()[0].languageTag;
    i18n.locale = lang;
  }, []);

  useEffect(() => {
    SplashScreen.hide(), 2000;
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
