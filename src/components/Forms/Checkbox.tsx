import React, {useState} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Box, Text} from '..';

interface CheckboxProps {
  label: string;
}

const Checkbox = ({label}: CheckboxProps) => {
  const [checked, setchecked] = useState(false);
  return (
    <BorderlessButton
      onPress={() => setchecked((c) => !c)}
      style={{justifyContent: 'center'}}>
      <Box flexDirection="row">
        <Box
          height={20}
          width={20}
          marginRight="s"
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'background'}>
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
