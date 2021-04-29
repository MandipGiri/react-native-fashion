import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Text, Box, Button} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';
import Footer from '../components/Footer';
import TextInput from '../../components/Forms/TextInput';
import {BorderlessButton} from 'react-native-gesture-handler';
import Checkbox from '../../components/Forms/Checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

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
        <Formik
          initialValues={{email: '', password: '',remember:false}}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter your Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
              />

              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="l">
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
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
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
