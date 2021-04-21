import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Text, Box, Button} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';
import Footer from '../components/Footer';
import TextInput from '../../components/Forms/TextInput';
import {BorderlessButton} from 'react-native-gesture-handler';
import Checkbox from '../../components/Forms/Checkbox';

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account.
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
          secureTextEntry={true}
        />

        <Box flexDirection="row" justifyContent="space-between" marginTop="l">
          <Checkbox
            label="Remember me"
            // checked={values.remember}
            // onChange={() => setFieldValue('remember', !values.remember)}
          />
          <BorderlessButton onPress={() => true}>
            <Text variant="button" color="primary">
              Forgot Password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
