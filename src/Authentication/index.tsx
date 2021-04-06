import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../components/Navigation';

import React from 'react';

import Onboarding from './Onboarding';
import Welcome from './Welcome';
import Login from './Login';

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
