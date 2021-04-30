import React, {useRef} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import {Container, Text, Box, Button} from '../components';
import {Routes, StackNavigationProps} from '../components/Navigation';
import Footer from './components/Footer';
import TextInput from '../components/Forms/TextInput';
import {BorderlessButton} from 'react-native-gesture-handler';
import Checkbox from '../components/Forms/Checkbox';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
});

const SignUp = ({navigation}: StackNavigationProps<Routes, 'SignUp'>) => {
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      remember: false,
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => navigation.navigate('SignUp'),
  });

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );
  return (
    <Container {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know what your name, email, and your password
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType={'email'}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              returnKeyLabel={'Next'}
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              autoCompleteType={'password'}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              returnKeyLabel={'Next'}
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your Password"
            secureTextEntry={true}
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCompleteType={'password'}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            returnKeyLabel={'Done'}
            onSubmitEditing={handleSubmit}
          />

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
