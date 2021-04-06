import React from 'react';
import {Dimensions, StyleSheet, Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Box, theme, Button, Text} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';

const {width} = Dimensions.get('window');
const picture = {
  src: require('../../../assets/1.png'),
  width: 730,
  height: 900,
};

const Welcome = ({navigation}: StackNavigationProps<Routes, 'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="background2"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="background2"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          flex={1}
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl">
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button label="Join us, it's Free" onPress={() => true} />
          <BorderlessButton onPress={() => navigation.navigate('Onboarding')}>
            <Text variant="button" color="secondary">
              Forgot password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
