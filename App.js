import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from './src/Authentication';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
