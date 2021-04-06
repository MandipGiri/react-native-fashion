import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {useAnimation} from '../../utils/helpers/AnimationHelper';

import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import {Extrapolate} from 'react-native-reanimated';
import {Routes, StackNavigationProps} from '../../components/Navigation';

const {width, height} = Dimensions.get('window');

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
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfit',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
    picture: {
      src: require('../../../assets/1.png'),
      width: 730,
      height: 1095,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      src: require('../../../assets/2.png'),
      width: 690,
      height: 1070,
    },
  },
  {
    title: 'Original',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      src: require('../../../assets/3.png'),
      width: 730,
      height: 1095,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: {
      src: require('../../../assets/4.png'),
      width: 616,
      height: 898,
    },
  },
];

const Onboarding = ({navigation}: StackNavigationProps<Routes, 'Onboarding'>) => {
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
        {slides.map(({picture}, index) => {
          const opacity = xValue.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, {opacity}]} key={index}>
              <Image
                source={picture.src}
                resizeMode={'contain'}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  width,
                  height: undefined,
                  marginTop: height * 0.1,
                }}
              />
            </Animated.View>
          );
        })}

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
          {slides.map(({title, picture}, index) => (
            <Slide
              key={index.toString()}
              {...{title, picture}}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{...StyleSheet.absoluteFillObject}, {backgroundColor}]}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={Animated.divide(xValue, width)}
                {...{index, xValue}}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{translateX: widthX}],
            }}>
            {slides.map(({subtitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index.toString()}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                  {...{subtitle, description, last}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
