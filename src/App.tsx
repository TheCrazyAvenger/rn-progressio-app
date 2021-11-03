import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/AppNavigator';
import {store} from './store/store';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import {en, ru} from './i18n/locals';
import {NativeModules} from 'react-native';

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

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
