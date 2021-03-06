import React, {ReactNode} from 'react';
import {Dimensions, Image, StatusBar, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, useTheme} from './Theme';

export const assets = [require('../../assets/background_1.png')];
const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="background">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius="o"
          backgroundColor="background"
          flex={1}>
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;

const styles = StyleSheet.create({});
