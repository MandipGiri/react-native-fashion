import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {AuthenticationNavigator} from './src/Authentication';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoadAssets from './src/components/LoadAssets';
import {theme} from './src/components/Theme';

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
