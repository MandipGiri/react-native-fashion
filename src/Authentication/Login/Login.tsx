import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Text, Box} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';
import Footer from '../components/Footer';

const Login = ({navigation}: StackNavigationProps<Routes, 'Login'>) => {
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => {}}
    />
  );
  return (
    <Container {...{footer}}>
      <View></View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
