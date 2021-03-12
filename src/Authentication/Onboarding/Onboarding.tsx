import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {multiply} from 'react-native-reanimated';
import {useAnimation} from '../../utils/helpers/AnimationHelper';

import Slide, {SLIDE_HEIGHT} from './Slide';
import Subslide from './Subslide';

const {width, height} = Dimensions.get('window');
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfit',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];

const Onboarding = () => {
  const scroll = useRef<any>();

  const [xValue] = useState(new Animated.Value(0));
  const [widthX, setwidthX] = useState<any>(new Animated.Value(0));

  const handleScroll = (event: any) => {
    useAnimation();
    setwidthX(-event.nativeEvent.contentOffset.x);
  };

  const backgroundColor = xValue.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: xValue}}}],
            {
              useNativeDriver: false,
              listener: (event) => {
                handleScroll(event);
              },
            },
          )}>
          {slides.map(({title}, index) => (
            <Slide key={index.toString()} {...{title}} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{...StyleSheet.absoluteFillObject}, {backgroundColor}]}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length - 1,
              transform: [{translateX: widthX}],
            },
          ]}>
          {slides.map(({subtitle, description}, index) => (
            <Subslide
              key={index.toString()}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              {...{subtitle, description}}
              last={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
