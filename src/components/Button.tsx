import {useTheme} from '@shopify/restyle';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Theme} from './Theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const Button = ({variant, label, onPress}: ButtonProps) => {
  const {colors} = useTheme();
  const backgroundColor =
    variant === 'primary' ? colors.primary : colors.background2;
  const color = variant === 'primary' ? colors.background : colors.secondary;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
