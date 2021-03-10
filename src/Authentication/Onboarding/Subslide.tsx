import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

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
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
}

const Subslide = ({subtitle, description, last}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
export default Subslide;
