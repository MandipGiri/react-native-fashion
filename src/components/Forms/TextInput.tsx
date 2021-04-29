import React, {useMemo} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, useTheme} from '../Theme';
import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({icon, touched, error, ...props}: TextInputProps) => {
  const theme = useTheme();

  const SIZE = useMemo(() => {
    return theme.borderRadii.m * 2;
  }, [theme]);

  const reColor = !touched ? 'body' : error ? 'danger' : 'primary';

  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      borderRadius="s"
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      alignItems="center">
      <Box padding="s">
        <Icon name={icon} size={16} {...{color}} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'primary' : 'danger'}
          marginRight={'s'}>
          <Icon name={!error ? 'check' : 'x'} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
