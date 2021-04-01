import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding, Welcome} from './src/Authentication';
import {Routes} from './src/components/Navigation';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/components';

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
