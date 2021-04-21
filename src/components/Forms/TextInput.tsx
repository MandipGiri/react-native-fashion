import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import theme, {Box} from '../Theme';
import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({icon, validator, ...props}: TextInputProps) => {
  const [input, setinput] = useState('');
  const [state, setstate] = useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? 'info' : state === Valid ? 'primary' : 'danger';

  const color = theme.colors[reColor];
  state === Pristine ? 'info' : state === Valid ? 'primary' : 'danger';

  const onChangeText = (text: string) => {
    setinput(text);
    if (state !== Pristine) {
      validate();
    }
  };

  const validate = () => {
    const valid = validator(input);
    setstate(valid);
  };

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
          onBlur={validate}
          {...{onChangeText}}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}
          marginRight={'s'}>
          <Icon
            name={state === Valid ? 'check' : 'x'}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
