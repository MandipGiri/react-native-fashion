import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Button} from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    color: '#0C0D34',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#0C0D34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}></Button>
    </View>
  );
};
export default Subslide;
