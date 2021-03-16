import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: any;
}

const Dot = ({index, currentIndex}: DotProps) => {

  const opacity = currentIndex.interpolate({
    inputRange: [index - 2, index - 1, index, index + 1, index + 2],
    outputRange: [0.5, 0.5, 1, 0.5, 0.5],
    type: Extrapolate.CLAMP,
  });

  const scale = currentIndex.interpolate({
    inputRange: [index - 2, index - 1, index, index + 1, index + 2],
    outputRange: [0.5, 0.5, 1.25, 0.5, 0.5],
    type: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: '#2CB9B0',
        height: 8,
        width: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{scale}],
      }}>
      <Text></Text>
    </Animated.View>
  );
};

export default Dot;

const styles = StyleSheet.create({});
